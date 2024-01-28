import express, { Router, Request, Response } from "express";

import bookService from "../services/book-service"; 

const router = express.Router();
router.use(express.json());

router.get("/", async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks(); 
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

export default router;
