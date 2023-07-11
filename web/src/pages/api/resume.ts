import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(process.env.DO_CHROMIUM_URL),
    });

    const page = await browser.newPage();
    const pdfURL = `${process.env.NEXT_PUBLIC_SITE_URL}/resume`;

    await page.goto(pdfURL, {
      waitUntil: `networkidle0`,
    });

    await page.emulateMediaType(`screen`);

    const pdf = await page.pdf({
      path: `/tmp/resume.pdf`,
      printBackground: true,
      format: `letter`,
    });

    res.send(pdf);

    await browser.close();
  } catch (error: any) {
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.message });
  };
};

export default handler;
