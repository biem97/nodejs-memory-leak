import express from "express";

// Routers
import memoryLeakClass from "./routers/memoryLeakClass.js";
import memoryLeakLiteral from "./routers/memoryLeakLiteral.js";

const PORT = process.env.PORT || 5000;

const main = () => {
  const app = express();

  // Routers
  app.get("/", (_, res) => {
    res.end("OK");
  });
  app.get("/memory-leak-class", memoryLeakClass);
  app.get("/memory-leak-literal", memoryLeakLiteral);

  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
  });
};

//
main();
