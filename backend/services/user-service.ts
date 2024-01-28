import { User, PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
    async getAllUsers(): Promise<User[]> {
        return await prisma.user.findMany();
    }

    async createUser(name: string, email: string, role: Role, lastName: string,imageUrl:string): Promise<User> {
        return prisma.user.create({
            data: {
                name,
                email,
                role,
                lastName,
                imageUrl
            },
        });
    }

    async updateUser(id: number, name: string, email: string, role: Role,lastName:string,imageUrl:string): Promise<User | null> {
        return prisma.user.update({
            where: { id },
            data: {
                name,
                email,
                role,
                lastName,
                imageUrl
            },
        });
    }

    async deleteUser(id: number): Promise<User | null> {
        return prisma.user.delete({
            where: { id },
        });
    }


    async getUserById(id: number): Promise<User | null> {
        return prisma.user.findUnique({
            where: { id },
        });
    }
}

export default new UserService();