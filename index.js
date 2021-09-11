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

var obj = {
    x : 40,
    y : 60,
    z : 75
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// var obj2 = obj 
// obj2.x = 70
// obj2.y = 100

// console.log(obj)
// console.log(obj2)

var obj2 = Object.assign({}, obj)
obj2.x = 100

console.log(obj)
console.log(obj2)

