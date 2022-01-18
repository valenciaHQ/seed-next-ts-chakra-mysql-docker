import { NextApiHandler } from "next";
import { connection } from "../../lib/db";

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await (
      await connection
    ).execute(`
      SELECT * FROM entries
      ORDER BY id DESC
      LIMIT 10
  `);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
