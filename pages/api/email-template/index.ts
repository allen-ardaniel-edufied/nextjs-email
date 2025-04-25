import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { get } from 'lodash';
import prisma from 'prisma/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const userId = get(session, 'user.id', '') as string;


  if (req.method === 'POST') {
    const { subject, content, thumbnail } = req.body;

    if (!subject || !content || !thumbnail) {
      throw new Error('Invalid payload');
    }

    const result = await prisma.emailTemplate.create({
      data: {
        subject: subject,
        content: content,
        thumbnail: thumbnail,
        userId: "507f1f77bcf86cd799439011",
      },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    const result = await prisma.emailTemplate.findMany({
    });
    res.json(result);
  }
}
