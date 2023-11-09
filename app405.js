//Call Back function
const add2 = () => {
  console.log("Call Function");
};

const add = (add2, a, b) => {
  add2();
  return a + b;
};
const total = add(add2, 10, 20);
console.log("Total: ", total);
