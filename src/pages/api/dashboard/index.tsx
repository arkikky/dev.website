import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Handle your API logic here

  res.status(200).json({ message: "Dashboard data" });
};

export default handler;
