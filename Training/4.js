// 26-02-26

// schedular

// let counter = 0

// let id = setInterval(function(){
//     console.log("hello")
// },1000)

// let unique = setTimeout(function(){
//     clearInterval(id)
// },6000)

// async fetch and all

// let url = "https://jsonplaceholder.typicode.com/posts/100"

// GET

// let options = {
//     method: "GET"
// }

// fetch(url,options)

// .then((res)=> res.json())
// .then((data)=>{
//     console.log(data)
// })

// .catch((err)=>{
//     console.log(err)
// })

// POST

// let user = {
//     "name" : "John",
//     "age" : 22
// }

// let options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
// }

// fetch(url,options)

// .then((res)=> res.json())
// .then((data)=>{
//     console.log(data)
// })

// .catch((err)=>{
//     console.log(err)
// })

// PUT

// let user = {
//     "name" : "John",
//     "age" : 22
// }

// let options = {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
// }

// fetch(url,options)

// .then((res)=> res.json())
// .then((data)=>{
//     console.log(data)
// })

// .catch((err)=>{
//     console.log(err)
// })

// PATCH

// let user = {
//     "title": "hello",
//     "body" : "yellow"
// }

// let options = {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
// }

// fetch(url,options)

// .then((res)=> res.json())
// .then((data)=>{
//     console.log(data)
// })

// .catch((err)=>{
//     console.log(err)
// })


// map

// let a = [1,2,3,54,65,67]

// let b = a.map(function(element,index,array){
//     // console.log(element,index,array)
//     return element*element
// })

// console.log(b)

// foreach

// let b = a.forEach(function(element,index,array){
//     // console.log(element)
//     return element
// })

// console.log(b)

// filter

// let b = a.filter(function(c){
//     return c % 2 ===0
// })

// console.log(b)

let a = [2,4,6]
let b = [3,6,9]
let c = [4,8,16]
let d = [5,10,15]
let e = [6,12,18]

let f = a.map(function(element,index,array){
    // console.log(element,index,array)
    return element*element
})

console.log(f)

let g = b.map(function(element,index,array){
    // console.log(element,index,array)
    return element*element
})

console.log(g)

let h = c.map(function(element,index,array){
    // console.log(element,index,array)
    return element*element
})

console.log(h)

let i = d.map(function(element,index,array){
    // console.log(element,index,array)
    return element*element
})

console.log(i)

let j = e.map(function(element,index,array){
    // console.log(element,index,array)
    return element*element
})

console.log(j)
