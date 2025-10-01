import { apply } from "vike-server/hono";
import { serve } from "vike-server/hono/serve";
import app from "./app";

const startServer = () => {
  apply(app);
  return serve(app, {
    port: 3000,
    hostname: "localhost",
  });
};

export default startServer();
