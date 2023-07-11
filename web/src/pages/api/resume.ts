/* eslint-disable no-secrets/no-secrets */
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req?.query;
  const { url } = query;

  if (!url) res.status(400).json({ message: `A URL parameter is required.` });

  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
  });

  const page = await browser.newPage();

  await page.goto(url as string, {
    waitUntil: `networkidle0`,
  });

  return res.status(200).send(await page.pdf())

  // try {
  //   const browser = await puppeteer.launch({
  //     args: chromium.args,
  //     executablePath: await chromium.executablePath(process.env.DO_CHROMIUM_URL),
  //   });
  //   console.log(browser.isConnected())

  //   const page = await browser.newPage();
  //   page.once(`load`, () => console.log(`Page loaded`))

  //   await page.goto(url as string, {
  //     waitUntil: `networkidle2`,
  //     timeout: 0,
  //   });

  //   await page.emulateMediaType(`screen`);

  //   const pdf = await page.pdf({
  //     path: `resume.pdf`,
  //     printBackground: true,
  //     format: `letter`,
  //   });

  //   await page.close();
  //   await browser.close();

  //   res.send(pdf);

  // } catch (error: any) {
  //   console.log(error);
  //   return res.status(error.statusCode || 500).json({ error: error.message });
  // };
};

export default handler;
