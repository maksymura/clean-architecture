import { Request, Response } from 'express';

export class BaseController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(req: Request, res: Response): Promise<void> {}
}
