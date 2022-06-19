function computeTerm(term) {
  return computeTerm[term] || (computeTerm[term] = compute());
  function compute() {
    return Buffer.alloc(1e3);
  }
}

const cache = (_req, res) => {
  res.end(
    `Memory Leak Cache.  ${computeTerm(
      Math.random()
    )} . Open Chrome Dev Tool for NodeJS to debug.`
  );
};

export default cache;
