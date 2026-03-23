// console.log("hello");

// let a:number = 20

// console.log(a);


// function sum (a:number,b:number): number {
//     return a*b
// }

// console.log(sum(2,3));

// let user:{
//     id:number,
//     name:string
// }

// user = {
//     id:1,
//     name:"Ronnie"
// }

// console.log(user);

// interface Use{
//     id:number,
//     name:string,
//     age:number
// }

// let use:Use = {
//     id: 1,
//     name:"Sham",
//     age: 41
// }

// console.log(use);

// type Users = {
//     id:number,
//     name:string,
//     age:number
// }

// let users:Users = {
//     id: 1,
//     name: "Maan",
//     age: 14
// }

// console.log(users);

// optional property

interface Fusion{
    readonly id:number,
    name:string,
    email?:string // optional
}

let fusion:Fusion = {
    id:1,
    name: "BHV"
}

console.log(fusion);

// readonly

let fuson:Fusion = {
    id:1,
    name: "jbkvsd"
}

// fuson.id =  2;

// array annotation

let number:number[] = [1,2,3,4]

// object arr ann

// let fusion:Fusion[] = {
//     {id:1,name:"jvbkf"},
//     {}
// }

// tuple

let studnt: [string,number] = ["hdsb", 52]

console.log(studnt);

// union type alias

type status = "success" | "failed" | "loading"

let currentStatus:status = "loading"

console.log(currentStatus);


let a:string|number = 96

console.log(a);

// extend interface / type

interface Name extends Fusion{
    phone:number
}

let name:Name = {
    id:1,
    name:"dbkvf",
    phone:42
}

console.log(name);

type User = {
    id:number
}

type Phone = {
    fone:number
}

type Naam = User & Phone &{
    gmail:string
}

let naame:Naam = {
    id:1,
    fone:41,
    gmail:"dbjkv"
}

console.log(naame);


