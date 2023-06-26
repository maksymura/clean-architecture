import { Request, Response } from "express";
import { FastifyRequest, FastifyReply } from 'fastify';

export abstract class BaseExpressHttpController {
  abstract execute(req: Request, res: Response): Promise<unknown>;

  async handleRequest(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.execute(req, res);

      res.json(result);
    } catch (err) {
      res.status(500).json({error: err});
    }
  }
}

export abstract class BaseFastifyHttpController {
  abstract execute(req: FastifyRequest, res: FastifyReply): Promise<unknown>;

  async handleRequest(req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
      const result = await this.execute(req, res);

      res.send(result);
    } catch (err) {
      res.code(500).send({error: err});
    }
  }
}