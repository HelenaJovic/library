import { User, PrismaClient, Role } from "@prisma/client";
import { CreateUserDto, UpdateUserDto,CreateUserDtoType ,UpdateUserDtoType} from '../dtos/user-dto';

const prisma = new PrismaClient();

class UserService {
     getAll(): Promise<User[]> {
        return  prisma.user.findMany();
    }

    create(createUserDto: CreateUserDtoType): Promise<User> {
        return prisma.user.create({
            data: createUserDto,
        });
    }

    update(updateUserDto: UpdateUserDtoType): Promise<User | null> {
        const { id, ...data } = updateUserDto;
        return prisma.user.update({
            where: { id },
            data,
        });
    }

     delete(id: number): Promise<User | null> {
        return prisma.user.delete({
            where: { id },
        });
    }


     getById(id: number): Promise<User | null> {
        return prisma.user.findUnique({
            where: { id },
        });
    }
}

export default new UserService();