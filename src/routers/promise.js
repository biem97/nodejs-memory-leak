import { v4 as uuid } from "uuid";

async function task(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const promise = (req, res) => {
  const id = uuid();
  task(getRndInteger(100, 20000));
  res.writeHead(200);

  res.end(
    `Memory Leak Promise. UUID: ${id}. Open Chrome Dev Tool for NodeJS to debug.`
  );
};

export default promise;

// *** SOLUTION *** //
// async function task(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function timeout(timer) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, timer);
//   });
// }

// const promise = (req, res) => {
//   const id = uuid();
//   Promise.race([task(getRndInteger(100, 20000)), timeout(500)]);
//   res.writeHead(200);

//   res.end(
//     `Memory Leak Promise. UUID: ${id}. Open Chrome Dev Tool for NodeJS to debug.`
//   );
// };
