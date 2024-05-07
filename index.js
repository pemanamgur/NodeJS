// console.log("Hello world");

const VALUE_OF_PI = 3.14; //global facts ko lagi better readability;  //snake case;

//higher ordering function : forEach , map , filter , reduce

// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((item) => {
//   console.log(item);
// });
// const values = fruits.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(values);  //forEach never return value so we use a higher order funciton

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nums = numbers.filter((num) => num > 4);

// const nums = numbers.filter((num) => {
//   return num > 4;
// });
// console.log(nums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNums = myNums.map((item) => item * 3);

// const myNewNums = myNums.map((item) => {
//   return item * 3;
// });
// console.log(myNewNums);

//This is chaining
// const nums = [12, 3, 4, 5, 5];
// const val = nums.map((item) => item * 2).map((item) => item + 2);
// console.log(val);

// const oddNumber = [1, 3, 5, 7, 9];

// let initialValue = 0;

// const result = oddNumber.reduce((acc, curr) => acc + curr, initialValue);
// const result = oddNumber.reduce((acc, curr) => {
//   return acc + curr;
// }, initialValue);
// console.log(result);

//we cant break higher order function :

//primitive is evaluated by value  while  non-primiteve or complex

const obj1 = {
  name: "Pema",
  age: 21,
  college: "Texas College ",
  greet: () => {
    console.log("Hello there.");
  },
};

// const obj2 = { ...obj1 };
const obj2 = obj1;

// obj2.greet = "Im good";

// console.log("First obj check", obj1 === obj2); //first level deep
// console.log("Second obj check", obj1.greet === obj2.greet); // 2nd level deep

//const ko value can be changed in complex objject like ogject and array

//two obj and same key : value pair then while comparing

//single threaded: loop the you cant wite in browser
