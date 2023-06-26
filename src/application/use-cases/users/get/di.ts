import {ArrayStorageUsersRepo} from "../../../../infrastructure/dal/array-storage/users";
import {GetUserUseCase} from "./case";
import {ExpressGetUserController} from "./controller/express";
import { FastifyGetUserController } from "./controller/fastify";

const getUserUseCase = new GetUserUseCase(new ArrayStorageUsersRepo());
export const expressGetUserController = new ExpressGetUserController(getUserUseCase);
export const fastifyGetUserController = new FastifyGetUserController(getUserUseCase);