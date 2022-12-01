import type { NextApiRequest, NextApiResponse } from "next";

import prismaClient from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const seo = await prismaClient.seo.findFirst({
      select: {
        title: true,
      },
    });

    if (!seo?.title) throw new Error();

    res.status(200).json(seo.title);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
