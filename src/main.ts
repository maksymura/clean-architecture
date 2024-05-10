import { ArrayStorageUsersRepo } from './infrastructure/dal/array-storage/users';
import { ObjectStorageUsersRepo } from './infrastructure/dal/object-storage/users';
import {
  CreateUserController,
  GetAllUsersController,
  GetUserController,
} from './infrastructure/http/users/controllers';
import { GetUserUseCase } from './application/use-cases/users/get/case';
import { ExpressApp } from './infrastructure/http/app';
import { CreateUserUseCase } from './application/use-cases/users/create/case';
import { Config } from './config';
import express from 'express';
import { GetAllUsersUseCase } from './application/use-cases/users/get-all/case';

async function main() {
  const config = new Config();

  const arrayStorageUsersRepo = new ArrayStorageUsersRepo();
  const objectStorageUsersRepo = new ObjectStorageUsersRepo();

  const expressApp = new ExpressApp(config);

  const usersRouter = express.Router();
  usersRouter.get(
    '/users/',
    new GetAllUsersController(new GetAllUsersUseCase(arrayStorageUsersRepo))
      .handle
  );
  usersRouter.get(
    '/users/:id',
    new GetUserController(new GetUserUseCase(arrayStorageUsersRepo)).handle
  );
  usersRouter.post(
    '/users',
    new CreateUserController(new CreateUserUseCase(objectStorageUsersRepo))
      .handle
  );
  expressApp.app.use(usersRouter);

  expressApp.start();
}

main().catch((err) => console.log(err));
