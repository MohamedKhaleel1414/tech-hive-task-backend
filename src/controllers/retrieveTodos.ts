import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function retrieveTodos(req,res) {
    const todos = await prisma.todo.findMany({
        where:{
            userId:req.header("id")
        }
    })
    if(todos.length > 0){
        await prisma.$disconnect
        res.status(200).send(todos)
    } else {
        await prisma.$disconnect
        res.status(204).send("No todos to show!")
    }
}