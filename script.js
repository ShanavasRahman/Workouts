// "use strict";

// let radius = [2, 5, 8, 3];
// let area = function (radius) {
//     let output = Math.PI * radius * radius;
//     return output;
// }

// let circumference = function (radius) {
//     let output = 2 * Math.PI * radius;
//     return output
// }

// let calculate = function (radius,logic) {
//     let put = [];
//     for (let i = 0; i < radius.length; i++){
//         put.push(logic(radius[i]));
//     }
//     return put;
// }

// console.log(calculate(radius, area));

// function hello(a, b, ...arr) {
//     let z = [a, b, ...arr];
//     let sum = 0;
//     for (let i = 0; i < z.length; i++){
//         sum += z[i];
//     }
//     console.log(sum);

// }

// hello(1, 5, 4, 8, 9, 6, 1, 5);
// let output = arr.filter(function (x) {
//     return x > 3;
// });

// console.log(output);

// let a = 10000;

// *******************************************Promise workouts

// let p1 = new Promise((resolve, reject) => {
//     if (a < 1000) {
//         resolve();
//     } else {
//         reject(new Error("Less than 1000"));
//     }
// });

// p1.then(() => {
//     console.log("Resolved...");
// }).catch((error) => {
//     console.log("Error:", error.message);
// })

/*
createOrder
proceedToPayment
showOrderSummary
updateWallet
*/

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 resolved")
//   }, 4000)
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p2 rejected")
//   }, 3000);
// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 resolved")
//   }, 5000);
// })

// Promise.any([p2, p1, p3])
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   })

// **************************************async await

// async function handlePromise() {
//   try {
//     const data = await fetch("https://api.github.com/users/shanavasRahman");
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromise();

// *********************this keyword

// console.log(this);

// function thisTest() {
//   console.log("Hello");
// }
// thisTest();

// const obj = {
//   x: 1,
//   a: function () {
//       const y = () => {
//         console.log(this)
//       }
//       y();
//     }
// }
// obj.a();

// **********************************Objects

// const obj = {
//   firstName: "Shanavas",
//   place: "Palakkad",
//   age: 24
// }

// let arr = ["john", "ram", "harry"];
// let newArr = [3, 1, 2];

// let newObj={}
// arr.map((value, index) => {
//   newObj[value] = newArr[index];
// });

// console.log(newObj);

// let entries = Object.entries(newObj);
// console.log(entries);

// let sortedObj={}

// entries.sort((a, b) => a[1] - b[1]).map(([key, value]) => {
//   sortedObj[key] = value;
// });

// console.log(sortedObj);

//********************************Truthy and falsy values

// console.log(false);
// if (()=>{}) {
//   console.log("true zero");
// } else {
//   console.log("falsy zero")
// }

// let obj = {
//   firstName: "Shanavas",
//   lastName: "Rahman",
// }

//  function getName(complement,cricketer) {
//   console.log(this.firstName + " " + this.lastName + complement + cricketer);
// }

// let newObj = {
//   firstName: "M S",
//   lastName:"Dhoni"
// }

// let newFunction = getName.bind(obj, [" is a good man", " and good cricketer"]);
// console.log(newFunction)

// newFunction();

//**************************Currying

// function multiply(x,y) {
//     console.log(x * y);
// }

// const multiplybyTwo = multiply.bind(this, 2)

// multiplybyTwo(2);

// let value = "ggtttttttff"
// let obj = {};
// let count
// for (i = 0; i < value.length; i++){
//   for (j = i+1; j < value.length; j++){
//     if (value[i] == value[j]) {
//       obj[value[i]]=
//     }
//   }
// }


// const promise = fetch("https://api.github.com/users/shanavasRahman");
// console.log(promise);

// promise.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err);
// })


// const samplePromise = new Promise((resolve, reject) => {
//     let id = null;
//     if (id) {
//         resolve("resolved");
//     } else {
//         reject("rejected")
//     }
// })
// samplePromise
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })



// //callback hell
    
// addTocart(cart, () => {
//     proceedToPayment(productIds, () => {
//         updateWallet(userId, () => {
//             couponChecking(userId)
//         })
//     })
// })


// addTocart(cartItems)
//     .then((productIds) => {
//     proceedToPayment(productIds);
//     })
//     .then((userId) => {
//     updateWallet(userId)
//     })
//     .then((userId) => {
//     couponchecking(userId)
// })



// Function.prototype.hello=function(){
//     console.log("Hello this is from prototype");
// }

// function fun() {
    
// }



//call

// let hello = {
//     firstName: "Shanavas",
//     lastName: "Rahman"
// };

// function callFunction(hometown,state) {
//     console.log(`${this.firstName} ${this.lastName} from ${hometown},${state}`);
// }

// callFunction.call(hello, "Palakkad", "Kerala");

// callFunction.apply(hello, ["Palakkad", "Kerala"]);

// const sample = callFunction.bind(hello, "Palakkad", "Kerala");
// console.log(sample);
// sample();









