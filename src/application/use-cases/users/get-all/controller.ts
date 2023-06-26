import {Request, Response} from "express";
import {BaseExpressHttpController} from "../../base-controllers";
import {GetAllUsersUseCase} from "./case";
import {GetAllUsersResponse} from "./interface";

export class ExpressGetAllUsersController extends BaseExpressHttpController {
  private useCase: GetAllUsersUseCase;

  constructor(useCase: GetAllUsersUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute(req: Request, res: Response): Promise<GetAllUsersResponse> {
    return this.useCase.execute(req.body);
  }
}