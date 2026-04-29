import type { RequestHandler } from "express";
import { prisma } from '../lib/prisma.js';

export const getUsers :RequestHandler= (req, res) => {
   console.log("hello")
   res.json({ message: "Get all users" });
};

export const createUser :RequestHandler= async (req, res) => {
   console.log("hello")
   try {
         const { name, email, password } = req.body;
   const user = await prisma.user.create({
      data: {
         name,
         email,
         password
      }
   })
   console.log(user)
   res.json({message: "hi"});
   } catch (error) {
      console.log(error)
   }

}