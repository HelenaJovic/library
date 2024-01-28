import { UserBook, PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

class UserBookService {
        async addUserBook(userId: number, bookId: number, date: Date): Promise<UserBook> {
            return prisma.userBook.create({
                data: {
                    userId,
                    bookId,
                    date, 
                },
            });
        }
        async getAllBooksAndUsers(): Promise<UserBook[]> {
            return await prisma.userBook.findMany();
        }

        async getBookIdsByUserId(userId: number): Promise<number[]> {
            const userBooks = await prisma.userBook.findMany({
                where: {
                    userId: userId
                },
                select: {
                    bookId: true 
                }
            });
            return userBooks.map(ub => ub.bookId); 
        }

}

export default new UserBookService();