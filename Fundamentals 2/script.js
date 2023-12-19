"use strict";
// console.log("hello wrold");

// Functions

// Function decleration

// function ageCal(birthYear) {
//   return 2022 - birthYear;
// }

// const ageCal2 = ageCal(2002);
// console.log(ageCal2);

// Function expression

// const age3 = function (birthyear) {
//   return 2022 - birthyear;
// };

// const age3Para = age3(2002);
// console.log(age3Para);

// Arrow functions
// single line
// const arrowFucn = birthYear => 2022 - birthYear;
// const arrowFucn1 = arrowFucn(2002);
// console.log(arrowFucn1);

// Multi line

// const retirementYear = (birthYear, firstName) => {
//   const age = birthYear - 2022;
//   const retire = 65 - age;
//   return ` name ${firstName} retring at the age of${retire}`;
// };

// const retirement = retirementYear(2002,'adi');
// console.log(retirement)

// Calling another function inside a function

// function fruitPieces (fruit){
//     const cut = fruit * 4;
//     return cut;
// }

// function fruitsJuice (apples, oranges){
//     const applesPieces = fruitPieces(apples)
//     const oragngePieces = fruitPieces(oranges)

//     const juice = `there are ${applesPieces} apples and ${oragngePieces} oranges`
//     return juice;
// }

// const printFruit  = fruitsJuice(2,3);
// console.log(printFruit)

// Arrays

// const array = ['Adi', 'padi', 'gadi'];
// const array2 = new Array('Adi', 'sadi','nadi')
// console.log(array);
// console.log(array2);
// const arr3 = ['adi',34,34-33];
// console.log(arr3);

// Array operations (Methods) ----------------------------->

// const array = ['Adi', 'padi', 'gadi'];
// array.push('kafi');
// array[4] = 'kagal';
// array.pop();
// array.unshift('Safari');
// const shiftMe = array.shift();
// console.log(shiftMe);
// console.log(array)

// Objects in js

const newObj = {
  firstName: "Adi",
  lastName: "Thosar",
  age: 22,
};

// Accessing elements -> dot vs square bracets

// console.log(newObj.firstName)
// console.log(newObj['lastName'])
// console.log(newObj['age'+ 22])

// Adding properties

// newObj.college = 'tssms'
// newObj['location']= 'pune'
// console.log(newObj)

// Object methods

// const obj1 = {
//   firstName: "Adi",
//   lastName: "Thosar",
//   age: 22,
//   birthYear: 2002,
// calAge: function (birthYear){
//     return 2022 - birthYear ;
// },
// calAge: function (){
//     return 2022 - this.birthYear ;
// },
//   calAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   summary: function () {
//     this.data = `My name is ${this.firstName}, I am ${this.age} years old, My birthyear is ${this.birthYear}`;
//     return this.data;
//   },
// };

// console.log(obj1.calAge(2002));
// console.log(obj1.calAge());
// console.log(obj1.age);
// console.log(obj1);
// console.log(obj1.summary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.BMI);
// if (john.BMI > mark.BMI) {
//   console.log(
//     `John Smith's BMI ${john.BMI} is higher than Mark Miller's ${mark.BMI}!`
//   );
// } else {
//   console.log(
//     `Mark Miller's BMI ${mark.BMI} is higher than John Smith's ${john.BMI}!`
//   );
// }

// Array problem ---------------------------------------------------->

const printForcast = function () {
  const array = [17, 21, 23];
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    console.log(`...${array[i]}*c in ${counter} days...`);
    counter++;
  }
};

console.log(printForcast())
console.log("hii");
