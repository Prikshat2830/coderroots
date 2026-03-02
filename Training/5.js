// parameters / arguments

function greet(name ){ //parameter
    console.log(`Hello ${name}`)
    console.log("Hello " + name)
}

greet("Prikshat") //arguement

// rest parameter

function sum(...num){
    let res = num.reduce((acc , val) => acc + val, 0)
    console.log(res)
}

sum(5,6,78,9,2,1,3,6)

// spread parameter

let arr = [1,2,3,6,5,4,7,8,9]

console.log(...arr)

// return values

function abc(){
    return "Hello"
}

let res = abc()

console.log(res + " Yellow")

// Early Return

function checkAge(age){
    if(age < 18) return "Denied"
    return "Allowed"
}

let result = checkAge(19)

console.log(result)

// HOF

function multiply(x){
    return function(y){
        return x * y
    }
}

let double = multiply(2)

console.log(double(5))