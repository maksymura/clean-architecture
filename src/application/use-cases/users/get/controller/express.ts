import { Request, Response } from 'express';
import {BaseExpressHttpController} from "../../../base-controllers";
import {GetUserUseCase} from "../case";
import {GetUserResponse} from "../interface";

export class ExpressGetUserController extends BaseExpressHttpController {
  private useCase: GetUserUseCase;

  constructor(useCase: GetUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute(req: Request, res: Response): Promise<GetUserResponse> {
    return this.useCase.execute({id: req.params.id});
  }
}