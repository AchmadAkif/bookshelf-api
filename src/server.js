const hapi = require("@hapi/hapi");
const routes = require("./routes/main");

const PORT = 9000 || process.env.PORT;

const init = async () => {
  const server = hapi.server({
    port: PORT,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on localhost:${PORT}`);
};

init();
