import type { NextApiRequest, NextApiResponse } from "next";

import prismaClient from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await prismaClient.user.findFirst();

    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
