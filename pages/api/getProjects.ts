import type { NextApiRequest, NextApiResponse } from "next";

import prismaClient from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projects = await prismaClient.project.findMany();

    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
