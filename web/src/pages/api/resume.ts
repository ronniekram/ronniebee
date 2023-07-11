import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
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

  return res.status(200).send(await page.pdf({
    printBackground: true,
    format: `letter`,
  }))
};

export default handler;
