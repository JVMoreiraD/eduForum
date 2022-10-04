import { prisma } from "../../../../shared/infra/database/prismaClient";
import { IUsersAuthDTO } from "../../dtos/usersAuthDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<IUsersAuthDTO> {
        const user = await prisma.user.findUnique({
            where: { email },
        });
    }
}
