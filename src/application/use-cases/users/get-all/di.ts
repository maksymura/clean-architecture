import {ArrayStorageUsersRepo} from "../../../../infrastructure/dal/array-storage/users";
import {GetAllUsersUseCase} from "./case";
import {ExpressGetAllUsersController} from "./controller";

const getAllUsersUseCase = new GetAllUsersUseCase(new ArrayStorageUsersRepo());
export const getAllUsersController = new ExpressGetAllUsersController(getAllUsersUseCase);