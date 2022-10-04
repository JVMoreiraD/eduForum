import { IUsersAuthDTO } from "../dtos/usersAuthDTO";

interface IUsersRepository {
    findByEmail(email: string): Promise<IUsersAuthDTO>;
}
export { IUsersRepository };
