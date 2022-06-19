import { v4 as uuid } from "uuid";

var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing) console.log("hi");
  };
  theThing = {
    longStr: new Array(10000).join("*"),
    someMethod: function () {
      console.log("someMessage");
    },
  };
};

const closure = (_req, res) => {
  const id = uuid();
  replaceThing();
  res.writeHead(200);
  res.end(
    `Memory Leak Closure. UUID: ${id}. Open Chrome Dev Tool for NodeJS to debug.`
  );
};

export default closure;

// *** SOLUTION *** //
// var theThing = null;
// var replaceThing = function () {
//   var originalThing = theThing;
//   var unused = function () {
//     if (originalThing) console.log("hi");
//   };
//   theThing = {
//     longStr: new Array(10000).join("*"),
//     someMethod: function () {
//       console.log(someMessage);
//     },
//   };
//   originalThing = null;
// };
