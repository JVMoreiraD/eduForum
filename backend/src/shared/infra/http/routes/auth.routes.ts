import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/AuthenticateUserController"
import { Router } from "express"

const authenticateUserController = new AuthenticateUserController();

const auth = Router();

auth.post("/singIn", authenticateUserController.handle);

export { auth }
