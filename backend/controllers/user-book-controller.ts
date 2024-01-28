import express, { Router, Request, Response } from "express";
import bookService from "../services/book-service"; 
import userBookService from "../services/user-book-service"; 

const router = express.Router();
router.use(express.json());

router.post("/", async (req: Request, res: Response) => {
    const { userId, bookId, date } = req.body; 

    try {
        const userBook = await userBookService.addUserBook(userId, bookId, new Date(date));
        res.status(201).json(userBook);
    } catch (error) {
        res.status(500).json({ error: "Failed to add user to user" });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
      const users = await userBookService.getAllBooksAndUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
        
  });


  router.get("/booksByUser/:userId", async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        const bookIds = await userBookService.getBookIdsByUserId(userId);
        const books = await bookService.getBooksByIds(bookIds);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books for the user" });
    }
});

export default router;