const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient();

async function main() {
    
    const users = [
  {
    name: "Naveen",
    email: "naveen@gmail.com",
    password: "Naveen@123",
  },
  {
    name: "Jenny",
    email: "jenny@gmail.com",
    password: "Jenny@123",
  },
  {
    name: "Kenny",
    email: "kenny@gmail.com",
    password: "Kenny@123",
  },
  {
    name: "Akhil",
    email: "akhil@gmail.com",
    password: "Akhil@123",
  },
  {
    name: "Priya",
    email: "priya@gmail.com",
    password: "Priya@123",
  },
  {
    name: "Arjun",
    email: "arjun@gmail.com",
    password: "Arjun@123",
  },
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "Admin@123",
  },
];

for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

     await prisma.users.upsert({
      where:{
        email:user.email,
      },
      update:{
        name:user.name,
        password:hashedPassword,
      },
        create:{
            name:user.name,
            email:user.email,
            password:hashedPassword,
        },
     })
        

}
   console.log("Database Seeded Successfully");
}

 main().catch((error) => {
    console.error("Error While seeding database:",error);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});