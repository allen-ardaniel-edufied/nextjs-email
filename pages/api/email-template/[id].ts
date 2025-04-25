import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { get } from 'lodash';
import prisma from 'prisma/prisma';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const emailTemplateId = req.query.id;

  const session = await getSession({ req });

  if (req.method === 'DELETE') {
    // if (session) {
      const emailTemplate = await prisma.emailTemplate.deleteMany({
        where: { id: String(emailTemplateId)},
      });
      res.json(emailTemplate);
    // }
  } else if (req.method === 'GET') {
    const result = await prisma.emailTemplate.findFirst({
      where: {
        id: String(emailTemplateId),
      },
    });
    res.json(result);
  } else if (req.method === 'PATCH') {
    const result = await prisma.emailTemplate.updateMany({
      where: {
        id: String(emailTemplateId),
      },
      data: req.body,
    });
    res.json(result);
  }
}
