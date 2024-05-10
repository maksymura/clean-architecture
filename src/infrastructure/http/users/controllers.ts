import { GetAllUsersUseCase } from '../../../application/use-cases/users/get-all/case';
import { Request, Response } from 'express';
import {
  GetUserInput,
  GetUserUseCase,
} from '../../../application/use-cases/users/get/case';
import {
  CreateUserInput,
  CreateUserUseCase,
} from '../../../application/use-cases/users/create/case';
import { BaseController } from '../base';

export class GetAllUsersController extends BaseController {
  private useCase: GetAllUsersUseCase;

  constructor(useCase: GetAllUsersUseCase) {
    super();
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response) {
    try {
      const result = await this.useCase.execute();

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

export class GetUserController extends BaseController {
  private useCase: GetUserUseCase;

  constructor(useCase: GetUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async handle(req: Request<GetUserInput, unknown, unknown>, res: Response) {
    try {
      const result = await this.useCase.execute(req.params);

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

export class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async handle(req: Request<unknown, unknown, CreateUserInput>, res: Response) {
    try {
      const result = await this.useCase.execute(req.body);

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
