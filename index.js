// Stack Learner YT Video # 53: Accessing Object Properties in JS :

var point = {
    x : 10,
    y : 20,
    z : 15
}

// console.log(point.x)      // by using dot notation
// console.log(point['z'])      // by using array notation

point.x = 45
point.a = 21
point['y'] = 100

var prop = 'z'
point[prop] = 55

console.log(point)