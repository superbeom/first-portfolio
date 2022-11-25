import type { NextApiRequest, NextApiResponse } from "next";

import prismaClient from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const socials = await prismaClient.social.findMany();

    res.status(200).json(socials);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
