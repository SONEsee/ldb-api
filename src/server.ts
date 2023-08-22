import { createServer } from "http";
import app from "./app";
import environment from "./environment";

const server = createServer(app);
const port = environment.port || 9400;

server.listen(port, () => {
  console.log(
    `Server is running at port ${environment.port} - ${environment.node_env}`
  );
});
