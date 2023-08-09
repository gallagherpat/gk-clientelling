import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
// const prisma = new PrismaClient();


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'POST'){
    res.status(200).json({name: 'Patrick'});
  }
  // const users = await prisma.user.findMany();
}
