import express, { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router: Router = express.Router();

router.use(express.json());

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.post("/", async (req: Request, res: Response) => {
    const { name, email, role } = req.body;
  
    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          role,
        },
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
  
    try {
      const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
          name,
          email,
          role,
        },
      });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
      });
  
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  });
  router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });
    
  

export default router;
