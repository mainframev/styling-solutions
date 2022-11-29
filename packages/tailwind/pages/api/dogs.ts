import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const { query } = req;

      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/${query.breed}/images`);

      return res.status(200).json(data.message);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    return res.status(500);
  }
}
