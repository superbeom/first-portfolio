import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

import prismaClient from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const experiences = await prismaClient.experience.findMany({
    orderBy: {
      endedDate: Prisma.SortOrder.desc,
    },
  });

  res.status(200).json(experiences);
}
