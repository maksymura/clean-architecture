import {getUserController} from "../../../../application/use-cases/users/get";

const usersRouter = require('fastify').Router();

const root = '/users/';

usersRouter.get(`${root}:id`, getUserController('fastify').handleRequest);

module.exports = usersRouter;