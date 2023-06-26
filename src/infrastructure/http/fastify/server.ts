import fastify from "fastify";
import {HTTP_SERVER_PORT} from "../../../config/server";

const app = fastify();

app.register(require('./routes/users'));

app.listen(HTTP_SERVER_PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Fastify server is running on port ${HTTP_SERVER_PORT}`);
});