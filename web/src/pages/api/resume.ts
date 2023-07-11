import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(process.env.DO_CHROMIUM_URL),
      ignoreHTTPSErrors: true,
      headless: true
    });

    const page = await browser.newPage();

    await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/resume`, {
      waitUntil: `networkidle2`,
    });

    await page.emulateMediaType(`screen`);

    const pdf = await page.pdf({
      path: `resume.pdf`,
      printBackground: true,
      format: `letter`,
    });

    await page.close();
    await browser.close();

    res.send(pdf);

  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  };
};

export default handler;
