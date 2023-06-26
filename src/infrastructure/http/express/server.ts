import express, { Request, Response } from 'express';
import {HTTP_SERVER_PORT} from "../../../config/server";
import {usersRouter} from "./routes/users";

const app = express();

app.use('/users', usersRouter);

app.listen(HTTP_SERVER_PORT, () => {
  console.log(`Express server is running on port ${HTTP_SERVER_PORT}`);
});