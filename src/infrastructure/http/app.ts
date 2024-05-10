import express, { Express } from 'express';

export class ExpressApp {
  app: Express;
  config: { port: number };

  constructor(config: { port: number }) {
    this.config = config;
    this.app = express();
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`Express server is running on port ${this.config.port}`);
    });
  }
}
