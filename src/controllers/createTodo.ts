import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function createTodo(req,res) {
    let newTodo = await prisma.todo.create({
        data:{
            'title':req.body.title,
            'description':req.body.description,
            'userId':req.body.userId
        }
    })
    if(newTodo){
        console.log(newTodo)
        await prisma.$disconnect;
        res.status(201).send("New Todo has been added successfully");
    } else {
        console.log("an error occurred while adding todo")
        await prisma.$disconnect;
        res.status(501).send("an error occurred while adding todo")
    }
}