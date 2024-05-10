import express, { Express } from 'express';
import {
  CreateUserController,
  GetAllUsersController,
  GetUserController,
} from './users/controllers';
import { GetAllUsersUseCase } from '../../application/use-cases/users/get-all/case';
import { GetUserUseCase } from '../../application/use-cases/users/get/case';
import { CreateUserUseCase } from '../../application/use-cases/users/create/case';

export class ExpressApp {
  app: Express;
  config: { port: number };

  constructor(config: { port: number }) {
    this.config = config;
    this.app = express();
  }

  registerUsers({
    getAll,
    get,
    create,
  }: {
    getAll: GetAllUsersUseCase;
    get: GetUserUseCase;
    create: CreateUserUseCase;
  }) {
    const router = express.Router();
    router.get('/users/', new GetAllUsersController(getAll).handle);
    router.get('/users/:id', new GetUserController(get).handle);
    router.post('/users', new CreateUserController(create).handle);
    this.app.use(router);
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`Express server is running on port ${this.config.port}`);
    });
  }
}
