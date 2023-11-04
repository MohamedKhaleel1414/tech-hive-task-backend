import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function login(req,res) {
    let loggedUser = await prisma.user.findFirst({
        where:{
            "email":req.body.email,
            "password":req.body.password,
        }
    })
    if(loggedUser){
        // console.log(loggedUser)
        let token = jwt.sign(loggedUser.id.toString(), process.env.TOKEN_SECRET);
        console.log(token)
        await prisma.$disconnect
        res.header("Authentication",token)
        res.status(200).send(loggedUser)
    } else {
        await prisma.$disconnect
        res.status(401).send("Invalid email or password")
    }
}