import express from 'express'
import {BaseExpressHttpController} from "../../../../application/use-cases/base-controllers";
import {createUserController} from "../../../../application/use-cases/users/create";
import {getUserController} from "../../../../application/use-cases/users/get";
import {getAllUsersController} from "../../../../application/use-cases/users/get-all";

export const usersRouter = express.Router();

usersRouter.get('/', getAllUsersController.handleRequest);
usersRouter.get('/:id', (getUserController('express') as BaseExpressHttpController).handleRequest);
usersRouter.post('/', createUserController.handleRequest);