import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function updateTodo(req, res) {
  const updated = await prisma.todo.update({
    where: {
      id: req.body.id,
    },
    data: {
      title: req.body.title,
      description: req.body.description,
    },
  });
  if (updated) {
    console.log(updated);
    await prisma.$disconnect;
    res.status(204).send("Item updated successfully");
  } else {
    console.log("an error occurred while updating todo");
    await prisma.$disconnect;
    res.status(501).send("an error occurred while updating todo");
  }
}
