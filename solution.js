//Write a function which will return square of given number
// const calcSquare = (num) => num ** 2;
// console.log(calcSquare(3));

const arr = [1, 2, 3, 4, 5, 6];
const calcSquare = arr.map((arrNum) => {
  return arrNum ** 2;
});

console.log(calcSquare); //let arr = [1, 2, 3, 4, 5, 6];
