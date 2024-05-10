import { ArrayStorageUsersRepo } from './infrastructure/dal/array-storage/users';
import { ObjectStorageUsersRepo } from './infrastructure/dal/object-storage/users';
import { GetUserUseCase } from './application/use-cases/users/get/case';
import { ExpressApp } from './infrastructure/http/app';
import { CreateUserUseCase } from './application/use-cases/users/create/case';
import { Config } from './config';
import { GetAllUsersUseCase } from './application/use-cases/users/get-all/case';

async function main() {
  const config = new Config();

  const arrayStorageUsersRepo = new ArrayStorageUsersRepo();
  const objectStorageUsersRepo = new ObjectStorageUsersRepo();

  const userUseCases = {
    getAll: new GetAllUsersUseCase(arrayStorageUsersRepo),
    get: new GetUserUseCase(arrayStorageUsersRepo),
    create: new CreateUserUseCase(objectStorageUsersRepo),
  }

  const expressApp = new ExpressApp(config);
  expressApp.registerUsers(userUseCases);
  expressApp.start();
}

main().catch((err) => console.log(err));
