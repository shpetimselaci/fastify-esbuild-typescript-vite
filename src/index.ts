import fastify from "fastify";
import cors from "fastify-cors";
const server = fastify();

const startServer = () =>
  new Promise((resolve, reject) => {
    server.register(cors);
    server.get("/ping", async (request, reply) => {
      return { text: "pong" };
    });

    server.listen(8080, (err, address) => {
      if (err) {
        console.error(err);
        reject(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
      resolve(server);
    });
  });

if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default startServer;
