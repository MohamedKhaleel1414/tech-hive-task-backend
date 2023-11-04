import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function deleteTodo(req, res) {
  const deleted = await prisma.todo.delete({
    where: {
      id: req.body.id,
    },
  });
  if (deleted) {
    console.log(deleted);
    await prisma.$disconnect;
    res.status(204).send("Item deleted successfully");
  } else {
    console.log("an error occurred while adding todo");
    await prisma.$disconnect;
    res.status(501).send("an error occurred while deleting todo");
  }
}
