import { FastifyRequest, FastifyReply } from 'fastify';
import {BaseFastifyHttpController} from "../../../base-controllers";
import {GetUserUseCase} from "../case";
import {GetUserResponse} from "../interface";

export class FastifyGetUserController extends BaseFastifyHttpController {
  private useCase: GetUserUseCase;

  constructor(useCase: GetUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute(req: FastifyRequest, res: FastifyReply): Promise<GetUserResponse> {
    const id = (req.params as {id: string}).id;

    return this.useCase.execute({id});
  }
}