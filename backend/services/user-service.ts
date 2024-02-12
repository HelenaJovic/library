import { User, PrismaClient, Role } from "@prisma/client";
import { CreateUserDto, UpdateUserDto,CreateUserDtoType ,UpdateUserDtoType} from '../dtos/user-dto';

const prisma = new PrismaClient();

class UserService {
     getAllUsers(): Promise<User[]> {
        return  prisma.user.findMany();
    }

    createUser(createUserDto: CreateUserDtoType): Promise<User> {
        return prisma.user.create({
            data: createUserDto,
        });
    }

    updateUser(updateUserDto: UpdateUserDtoType): Promise<User | null> {
        const { id, ...data } = updateUserDto;
        return prisma.user.update({
            where: { id },
            data,
        });
    }

     deleteUser(id: number): Promise<User | null> {
        return prisma.user.delete({
            where: { id },
        });
    }


     getUserById(id: number): Promise<User | null> {
        return prisma.user.findUnique({
            where: { id },
        });
    }
}

export default new UserService();