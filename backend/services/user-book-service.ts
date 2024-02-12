import { UserBook, PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

class UserBookService {
         addUserBook(userId: number, bookId: number, date: Date): Promise<UserBook> {
            return prisma.userBook.create({
                data: {
                    userId,
                    bookId,
                    date, 
                },
            });
        }
         getAllBooksAndUsers(): Promise<UserBook[]> {
            return  prisma.userBook.findMany();
        }

          getUserWithBooks(userId: number) {
            const userWithBooks =  prisma.user.findUnique({
                where: {
                    id: userId,
                },
                include: {
                    books: {
                        include: {
                            book: true, 
                        },
                    },
                },
            });
            return userWithBooks;
        }
        

}

export default new UserBookService();