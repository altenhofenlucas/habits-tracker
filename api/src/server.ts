import cors from "@fastify/cors";
import fastify from "fastify";
import { appRoutes } from "./routes";

const server = fastify();

server.register(cors);
server.register(appRoutes);

server
  .listen({
    port: 3000,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Server started!");
  });
