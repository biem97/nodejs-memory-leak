import { v4 as uuid } from "uuid";

const STORE = new Set();
const Item = class {
  constructor(req) {
    this.req = req;
    this.uuid = uuid();
    STORE.add(this);
  }
};

const memoryLeakClass = (req, res) => {
  const { uuid } = new Item(req);
  console.log(req.method, req.url, uuid);
  res.end(
    `Memory Leak Class. UUID: ${uuid}. Open Chrome Dev Tool for NodeJS to debug.`
  );
};

export default memoryLeakClass;
