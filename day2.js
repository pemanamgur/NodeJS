// flase , 0, '',null , undefined
//true , -1 , NaN , "abc" ," "

// console.log(Boolean(-1));
//nullish colesc ?? null and undefine

//Async JS -> non-blocking code:

// setTimeout(() => {
//   console.log("Set Timeout");
// }, 0);
// console.log("hello");

const average = (n1, n2) => {
  return (n1 + n2) / 2;
};

const itsme = setTimeout(() => {
  let result = average(2, 4);
  console.log(result);
}, 1000);
clearTimeout(itsme);

//dont use await in root level
//react ma sercounter async callback
//npm init -y
//npm i express
//package lock json le dependecies and sundepend ko package lai lock garcha: >>version should be manually change garnu parau
//WSL
// github account SSH : push using git bash not https
//git branch :
//git checkout -b feature/add    >>bitbucket cloud
// git log
// gco

