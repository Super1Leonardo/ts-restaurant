import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export type Idishes = {
  id: number,
  name: string,
  photo: string,
  description: string
}

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient = new PrismaClient();

let dishes: Idishes[] = [];

dishes = await prisma.dish.findMany({
  select: {
    id: true,
    name: true,
    photo: true,
    description: true,
  }
});

dishes.sort((a, b) => a.id - b.id);

export default dishes

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}