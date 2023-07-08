import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.SECRET_TOKEN) return res.status(401).json({ message: `Invalid token` });

  try {
    await res.revalidate(req.query.path as string);
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({ message: `Could not revalidate` });
  }
}

export default handler;
