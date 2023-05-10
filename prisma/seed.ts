import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userData = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
  },
];

async function seed() {
  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
