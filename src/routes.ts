import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/users", userController.create); //Recurso de usuários, quando chamar essa url, estaremos chamando o create "UserController"

export { router };