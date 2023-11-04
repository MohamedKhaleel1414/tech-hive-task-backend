import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function register (req, res)  {
  let checkEmail = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  console.log("checkEmail: ")
  console.log(checkEmail)
  let checkUsername = await prisma.user.findFirst({
    where: {
      username: req.body.username,
    },
  });
  console.log("checkUsername: ")
  console.log(checkUsername)
  if (!checkEmail && !checkUsername) {
    let newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      },
    });
    if(newUser){
        console.log(newUser)
        await prisma.$disconnect;
        res.status(201).send("New user has been added successfully");
    } else {
        console.log("an error occurred while register")
        await prisma.$disconnect;
        res.status(501).send("an error occurred while register")
    }
  } else if (checkEmail) {
    await prisma.$disconnect;
    res.status(200).send("This email is registered");
  } else if (checkUsername) {
    await prisma.$disconnect;
    res.status(200).send("This username is used");
  }
};