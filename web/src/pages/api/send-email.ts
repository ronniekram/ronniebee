/* eslint-disable no-secrets/no-secrets */
import { NextApiRequest, NextApiResponse } from "next";
import postmark from "postmark";

import { FormValues } from "@/components/contact/form";

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body: FormValues = req?.body;

  try {
    await client.sendEmail({
      "From": `me@ronniebee.dev`,
      "To": `cac0731fa0b48a89b6bb9d12bca81e59+81f0823fab418c781ec69e01ecc91a17@inbound.postmarkapp.com`,
      "Subject": `Contact Form Email`,
      "HtmlBody": `
        <p>${body.email}</p>
        <p>${body.message}</p>
        <p>Love, ${body.name}</p>,
      `,
      "MessageStream": `outbound`,
    });
    return res.json({ message: `Email sent` });
  } catch (error) {
    return res.json({ message: `It's a problem`, error });
  }
};
