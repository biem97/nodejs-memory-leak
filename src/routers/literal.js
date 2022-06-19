import { v4 as uuid } from "uuid";

const STORE = new Set();
const getObject = function (req) {
  const item = { req, uuid: uuid() };
  STORE.add(item);
  return item;
};

const literal = (req, res) => {
  const { uuid } = getObject(req);
  console.log(req.method, req.url, uuid);
  res.end(
    `Memory Leak Literal. UUID: ${uuid}. Open Chrome Dev Tool for NodeJS to debug.`
  );
};

export default literal;
