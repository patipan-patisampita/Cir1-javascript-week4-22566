//1.Regular function
//2.Express function
//3.Anonymous function
//4.Arrow/Lamda function
const msg = (a,...end) => {
  return a + "," + end;
};
//Call function
const sayHi = msg(10, 20, 30, 40, 50, 60, 70, "Mark", 90);
console.log(sayHi);
