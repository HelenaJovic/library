import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class BookService {
    async getAllBooks(): Promise<Book[]> {
        return await prisma.book.findMany();
    }

    async getBooksByIds(bookIds: number[]): Promise<Book[]> {
        return prisma.book.findMany({
            where: {
                id: { in: bookIds } 
            }
        });
    }
}

export default new BookService();
