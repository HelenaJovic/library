import express, { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import userService from "../services/user-service";
const prisma = new PrismaClient();
const router: Router = express.Router();

router.use(express.json());

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { name, email, role, lastName,imageUrl } = req.body;

  try {
      const newUser = await userService.createUser(name, email, role, lastName,imageUrl);
      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, role,lastName,imageUrl } = req.body;

  try {
      const updatedUser = await userService.updateUser(parseInt(id), name, email, role,lastName,imageUrl);
      res.json(updatedUser);
  } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
      const deletedUser = await userService.deleteUser(parseInt(id));
      res.json(deletedUser);
  } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
      const user = await userService.getUserById(parseInt(id));
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
