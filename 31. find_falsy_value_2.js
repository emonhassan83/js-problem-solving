//* Object theke "false value" kibabe khuje bad dite pari?

const obj = {
  a: "Emon",
  b: undefined,
  c: "Emon Hassan",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: "k",
  i: true,
  j: "Thanks all",
  k: NaN,
};

const truthyObject = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(truthyObject(obj));
