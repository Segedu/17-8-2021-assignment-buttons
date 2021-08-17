////1
// const button = document.getElementById("firstbtn");
// console.log(button);
// button.addEventListener("click", function () {
//   button.innerText = "לחצו עליי";
// });

////2
// const button = document.getElementById("buy");
// console.log(button);

// button.addEventListener("click", function () {
//   alert(" thank you!");
// });

// const button = document.getElementById("click here");
// button.addEventListener("click", function () {
//   alert("good luck!");
// });

// const button = document.getElementById("send");
// button.addEventListener("click", function () {
//   alert("sent successfully");
// });
// const button = document.getElementById("submit");
// button.addEventListener("click", function () {
//   alert("sent!");
// });

////3
// const ol = document.getElementById("ol");
// let li = document.getElementsByClassName("list");
// console.log(ol);
// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener("click", function () {
//     console.log(li[i]);
//   });
// }

////4
// const button = document.getElementById("secondbtn");
// let p = document.getElementById("paragraph");
// let num = 0;

// while (button) {
//   button.addEventListener("click", function () {
//     p.innerText = num++;
//   });
//   break;
// }

// //5
// let bottunDelete = document.getElementById("thirdbtn");
// let par = document.getElementById("anotherParagraph");
// while (bottunDelete) {
//   bottunDelete.addEventListener("click", function () {
//     p.innerText = num--;
//   });
//   break;
// }

////
/*
const bankCustomers = [
  {
    id: 321034312,
    phone: 0543520221,
    name: "Dan",
    email: "dan@gmail.com",
    balance: 300,
  },
  {
    id: 321034313,
    phone: 0543520222,
    name: "Sara",
    email: "sara@gmail.com",
    balance: 30000,
  },
  {
    id: 321034314,
    phone: 0543520223,
    name: "Hani",
    email: "hani@gmail.com",
    balance: -40000,
  },
  {
    id: 321034315,
    phone: 0543520224,
    name: "Shaul",
    email: "shaul@gmail.com",
    balance: 500,
  },
  {
    id: 321034235,
    phone: 0543520124,
    name: "Shula",
    email: "shula@gmail.com",
    balance: 1000000,
  },
  {
    id: 321034235,
    phone: 0543520124,
    name: "dana",
    email: "dana@gmail.com",
    balance: 1000000,
  },
];*/

// for (let i = 0; i < bankCustomers.length; i++) {
//   if (bankCustomers[i].balance > 400) {
//     console.log(bankCustomers[i]);
//   }
// }

// for (let i = 0; i < bankCustomers.length; i++) {
//   if (bankCustomers[i].balance < 200) {
//     console.log(bankCustomers[i]);
//   }
// }

// for (let i = 0; i < bankCustomers.length; i++) {
//   if (bankCustomers[i].balance == 1000000) {
//     console.log(bankCustomers[i]);
//     break;
//   }
// }

////7
/*const products = [
  {
    name: "bike",
    price: 500,
    discription: "some information about the specific product",
  },
  {
    name: "computer",
    price: 1000,
    discription: "some information about the specific product",
  },
  {
    name: "books",
    price: 200,
    discription: "some information about the specific product",
  },
];

let max = products[0].price;
for (let i = 0; i < products.length; i++) {
  if (products[i].price > max) {
    max = products[i].price;
  }
}
console.log(max);

let min = products[0].price;
for (let i = 0; i < products.length; i++) {
  if (products[i].price < min) {
    min = products[i].price;
  }
}
console.log(min);

for (let i = 0; i < products.length; i++) {
  products[i].price *= 0.7;
}
console.log(products[i].price);*/
