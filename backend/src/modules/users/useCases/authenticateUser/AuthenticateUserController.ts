import { UsersRepository } from "@modules/users/repositories/prisma/UsersRepository";
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const usersRepository = new UsersRepository();

        const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);

        const result = await authenticateUserUseCase.execute({ email, password });

        return response.json(result)
    }
}

export { AuthenticateUserController }