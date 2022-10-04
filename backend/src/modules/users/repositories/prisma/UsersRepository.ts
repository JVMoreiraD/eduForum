import { User } from "@prisma/client";
import { prisma } from "../../../../shared/infra/database/prismaClient";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        return user
    }
}
export { UsersRepository }