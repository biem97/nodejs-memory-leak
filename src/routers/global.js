import { v4 as uuid } from "uuid";

const STORE = new Set();
const Item = class {
  constructor(req) {
    this.req = req;
    this.uuid = uuid();
    STORE.add(this);
  }
};

const requestLogs = [];

const global = (req, res) => {
  const { id } = uuid();
  requestLogs.push({ url: req.url, array: new Array(10000).join("*") });
  res.end();

  res.end(
    `Memory Leak Global. UUID: ${id}. ${JSON.stringify(
      requestLogs
    )}. Open Chrome Dev Tool for NodeJS to debug.`
  );
};

export default global;

// *** SOLUTION

// const global = (req, res) => {
//   const { id } = uuid();
//   const requestLogs = [];
//   requestLogs.push({ url: req.url, array: new Array(10000).join("*") });
//   res.end();

//   res.end(
//     `Memory Leak Global. UUID: ${id}. ${JSON.stringify(
//       requestLogs
//     )}. Open Chrome Dev Tool for NodeJS to debug.`
//   );
// };
