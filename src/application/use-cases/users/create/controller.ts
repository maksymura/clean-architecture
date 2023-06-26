import {Request, Response} from "express";
import {BaseExpressHttpController} from "../../base-controllers";
import {CreateUserUseCase} from "./case";

export class ExpressCreateUserController extends BaseExpressHttpController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute(req: Request, res: Response) {
    await this.useCase.execute(req.body);
  }
}