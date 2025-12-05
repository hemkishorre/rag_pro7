// utils.js
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  let res = 0;
  for (let i = 0; i < b; i++) {
    res += a;
  }
  return res;
}

module.exports = { add, mul };
