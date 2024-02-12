import { z } from 'zod';

const Role = z.enum(["USER", "ADMIN"]);

const CreateUserDto = z.object({
    name: z.string(),
    email: z.string().email(), 
    role: Role,
    lastName: z.string(),
    imageUrl: z.string().url(), 
});

type CreateUserDtoType = z.infer<typeof CreateUserDto>;


const UpdateUserDto = CreateUserDto.extend({
    id: z.number(),
});
type UpdateUserDtoType = z.infer<typeof UpdateUserDto>;


export { CreateUserDto, UpdateUserDto,CreateUserDtoType,UpdateUserDtoType, Role };
