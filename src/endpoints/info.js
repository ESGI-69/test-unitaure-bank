import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {void}
 */
export default async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: 'Missing user id',
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        accounts: true,
      },
    });
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }
    res.status(200).json(user.accounts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
