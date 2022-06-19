import express from "express";

// Routers
import cache from "./routers/cache.js";
import classRouter from "./routers/class.js";
import closure from "./routers/closure.js";
import global from "./routers/global.js";
import literal from "./routers/literal.js";
import promise from "./routers/promise.js";

const PORT = process.env.PORT || 5000;

const main = () => {
  const app = express();

  // Routers
  app.get("/", (_, res) => {
    res.end(`
    <div>Memory Leak</div>
    <ol>
      <li>
        <a href="/cache">cache</a>
      </li>
      <li>
        <a href="/class">class</a>
      </li>
      <li>
        <a href="/closure">closure</a>
      </li>
      <li>
        <a href="/global">global</a>
      </li>
      <li>
        <a href="/literal">literal</a>
      </li>
      <li>
        <a href="/promise">promise</a>
      </li>
    </ol>`);
  });

  // Routers
  app.get("/cache", cache);
  app.get("/class", classRouter);
  app.get("/closure", closure);
  app.get("/global", global);
  app.get("/literal", literal);
  app.get("/promise", promise);

  app.get("*", (_, res) => {
    res.redirect("/");
  });

  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
  });
};

//
main();
