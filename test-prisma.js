const { PrismaClient } = require("@prisma/client");

console.log("Before Prisma");

const prisma = new PrismaClient();

console.log("After Prisma");
