// import {ArrayStorageUsersRepo} from "../../../../infrastructure/dal/array-storage/users";
import {ObjectStorageUsersRepo} from "../../../../infrastructure/dal/object-storage/users";
import {CreateUserUseCase} from "./case";
import {ExpressCreateUserController} from "./controller";

const createUserUseCase = new CreateUserUseCase(new ObjectStorageUsersRepo());
export const createUserController = new ExpressCreateUserController(createUserUseCase);