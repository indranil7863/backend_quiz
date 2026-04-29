import type { RequestHandler } from "express";



export const getUsers :RequestHandler= (req, res) => {
   res.json({ message: "Get all users" });
};