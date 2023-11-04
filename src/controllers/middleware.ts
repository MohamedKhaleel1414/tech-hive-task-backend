import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export default async function middleware(req, res, nxt) {
  const token = req.header("token");
  const emailHead = req.header("email");
  if(token){
    const deToken = jwt.verify(token, process.env.TOKEN_SECRET);
    let user = await prisma.user.findFirst({
        where:{
            "email":emailHead,
        }
    })
    if(deToken == user.id.toString()){
        nxt()
    }else{
        await prisma.$disconnect
        return res.status(401).send("Invalid Access Token");
    }
  }else{
    await prisma.$disconnect
    return res.status(403).send("Unauthorized Access");
  }
}
