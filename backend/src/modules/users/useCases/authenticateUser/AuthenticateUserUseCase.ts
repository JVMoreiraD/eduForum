import { IUsersAuthDTO } from "@modules/users/dtos/usersAuthDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "@config/auth";

interface IResponse {
    token: string
}
class AuthenticateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    async execute({ email, password }: IUsersAuthDTO): Promise<IResponse> {
        const userExists = await this.usersRepository.findByEmail(email);
        if (!userExists) {
            throw new AppError("Email ou senha incorretos")
        }
        const passwordMatch = await compare(password, userExists.password);

        if (!passwordMatch) {
            throw new AppError("Email ou senha incorretos")
        }

        const token = sign({ email }, auth.secret_token, {
            subject: userExists.id,
            expiresIn: auth.expires_in_token
        })

        const response: IResponse = {
            token: `${token}`
        }
        return response
    }
}

export { AuthenticateUserUseCase }