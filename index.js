// Stack Learner YT Video # 53: Accessing Object Properties in JS :

// var point = {
//     x : 10,
//     y : 20,
//     z : 15
// }

// // console.log(point.x)      // by using dot notation
// // console.log(point['z'])      // by using array notation

// // Stack Learner YT Video # 54

// point.x = 45
// point.a = 21
// point['y'] = 100

// var prop = 'z'
// point[prop] = 55

// //console.log(point)

// // Stack Learner YT Video # 55: Remove Object Properties in JS :

// //point.a = undefined

// delete point.a

// console.log(point)

//Stack Learner YT Video # 56: Comparing two objects in JS :

// var obj1 = {
//     a : 10,
//     b : 20
// }

// var obj2 = {
//     a : 10,
//     b : 20
// }

// //console.log(obj1 === obj2)

// if (obj1.a === obj2.a && obj1.b === obj2.b){
//     console.log(true)
// } else {
//     console.log(false)
// }

// Stack Learner YT Video # 57 : Iterate Object Properties in JS :

// var obj = {
//     x : 40,
//     y : 60, 
//     z : 75
// }
// // console.log('x' in obj)
// // console.log('p' in obj)

// for (var i in obj){
//     //console.log(i)
//     console.log(i + ': ' + obj[i])
// }

// Stack Learner YT Video # 58 : Object Method in JS : 

// var obj = {
//     x : 40,
//     y : 60,
//     z : 75
// }
// // console.log(Object.keys(obj))
// // console.log(Object.values(obj))
// // console.log(Object.entries(obj))

// // var obj2 = obj 
// // obj2.x = 70
// // obj2.y = 100

// // console.log(obj)
// // console.log(obj2)

// var obj2 = Object.assign({}, obj)
// obj2.x = 100

// console.log(obj)
// console.log(obj2)

// w3school / JS Function Definitions :

// Function Declaration :

// var x = myFunction (4,3);

// function myFunction (a, b){
//     return a * b ;
// }

// console.log(x);

// Function Expressions :

// const x = function (a, b){
//     return a * b
// }
// console.log(x)
// console.log(x(3, 4))
// console.log(3 , 4)  // not returning result as function

 
// The Function () Constructor :

// const myFunction = new Function ("a", "b", "return a * b")

// console.log(myFunction(4 , 3));

// Same result will be seen for the following code :

// const myFunction = function (a , b){return a * b};

// console.log(myFunction(4 , 3))

// Function Hoisting :

// function myFunction (a , b){
//     return a * b;
// }
// let x = myFunction (4 , 3)

// console.log(x)

// function myFunction (a , b){
//     return a * b;
// }
// let x = myFunction (4 , 3) * 2;

// console.log(x);


// w3school / JS Function Parameters :

// function myFunction (x , y){
//     if (y = undefined){
//         y = 2;
//     }
//     return x * y;
// }
// console.log(myFunction(4));  // Getting result NaN

// ECMAScript 2015 allows default parameter values in the function declaration:

// function myFunction (x , y = 2){
//     return x * y;
// }
// console.log(myFunction(4));

// The arguments Object :

// Ex. 1

// function findMax () {
//     let max = Infinity;
//     for (let i = 0; i < arguments.length; i ++ ) {
//         if (arguments [i] > max){
//             max = arguments [i];
//         }
//     }
//     return max;
// }
// console.log(findMax(4, 5, 6));  // Getting result Infinity 

// Ex. 2

// function sumAll (){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i ++){
//         sum += arguments [i];
//     }
//     return sum;
// }

// console.log(sumAll(1, 2, 3, 4, 5));


// JS Function Invocation :

// Invoking (Calling) a Function as a Method :

// const myObject = {
//     firstName : "John",
//     lastName : "Doe",
//     fullName : function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(myObject.fullName());

// const myObject = {
//     firstName : "John", 
//     lastName : "Doe",
//     fullName : function (){
//         return this;
//     }
// }
// console.log(myObject.fullName());  //This will return [object Object] (The owner object)

// function myFunction (arg1 , arg2){
//     this.firstName = arg1;
//     this.lastName = arg2;
// }

// const myObj = new myFunction ("John", "Doe");

// console.log(myObj.firstName);


// JS Function Call :

// All Functions are Methods:

// const myObject = {
//     firstName : "John",
//     lastName : "Doe", 
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(myObject.fullName());

// The JS call() Method:

// const person = {
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName : "John",
//     lastName : "Doe"
// }

// const person2 = {
//     firstName : "Mary",
//     lastName : "Doe"
// }

// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));

// The call() Method with Arguments:

// const person = {
//     fullName : function(city, country){
//         return this. firstName + " " + this. lastName + ", " + city + ", " + country;
//     }
// }

// const person1 = {
//     firstName : "John",
//     lastName : "Doe"
// }

// console.log(person.fullName.call(person1, "Oslo", "Norway"));


// JS Function Apply:

// The apply() method is similar to the call() method, but there is a fundamental difference between them i.e. the call() method takes arguments separately, but the apply() method takes arguments as an array :

// The apply() method with Arguments:

const person = {
    fullName : function (city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

const person1 = {
    firstName : "John",
    lastName : "Doe"
}

console.log(person.fullName.apply(person1, ["Oslo"], ["Norway"]));
