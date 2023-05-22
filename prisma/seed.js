import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userNameToCreate = [
  'Alice',
  'Bob',
  'Claire',
  'David',
  'Eve',
  'Frida',
];

const main = async () => {
  // Drop user table if it exists
  console.log('Dropping user table ...');
  await prisma.user.deleteMany({});

  userNameToCreate.forEach(async (firstName) => {
    // Create a new user
    const user = await prisma.user.create({
      data: {
        firstName,
      },
    });

    console.log(`Created user ${firstName} with id: ${user.id} ...`);
  });
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
