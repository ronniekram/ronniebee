import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
const Brevo = require('sib-api-v3-sdk');

import type { FormValues } from "@/components/contact/form";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: FormValues = req?.body;

  const { name, email, message } = body;

  Brevo.ApiClient.instance.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

  try {
    const response = await new Brevo.TransactionalEmailsApi().sendTransacEmail(
      {
        subject: `Portfolio Contact Form Submission`,
        sender: {
          email: email,
          name: name,
        },
        replyTo: {
          email: email,
          name: name,
        },
        to: [
          {
            email: `me+olive@ronniebee.dev`,
            name: `Ronnie Bee`,
          }
        ],
        htmlContent:`
          <html>
            <body>
              <h1>Website Event Request</h1>
              <p><strong>Name</strong>: ${name}</p>
              <p><strong>Emaill</strong>: ${email}</p>
              <p><strong>Message</strong>: ${message}</p>
            </body>
          </html>
        `,
        params: {
          bodyMessage: `Sent to you from ronniebee.dev`,
        },
      }
    )
    .then((resp: any) => resp.json())
    .catch((error: any) => error.json());
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

export default handler;
