import { User } from "@prisma/client";

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
}
export { IUsersRepository };
