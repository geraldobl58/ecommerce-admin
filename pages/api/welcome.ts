import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 * /api/welcome:
 *   get:
 *     description: Returns the welcome
 *     responses:
 *       200:
 *         description: welcome
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: "welcome",
  });
};

export default handler;
