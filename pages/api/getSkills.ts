import type { NextApiRequest, NextApiResponse } from "next";

import prismaClient from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const skills = await prismaClient.skill.findMany();

  res.status(200).json(skills);
}
