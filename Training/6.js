// date function

const now = new Date()

console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

// custom date

const birthday = new Date(2005, 0, 28)

console.log(birthday)

const exam = new Date(2026, 2, 25, 10, 30, 0)

console.log(exam)

// from a string

const holiday = new Date("2026-3-4")

console.log(holiday)

// formatting

const today = new Date()

// method1

console.log(today.toLocaleDateString("en-IN"))
console.log(today.toLocaleDateString("en-US"))

// method2

const day = today.getDate()
const month = today.getMonth() +1
const year = today.getFullYear()

console.log(`${day}/${month}/${year}`)

// method3

console.log(today.toLocaleString("en-IN"))

// realtime age calculator

function calculateAge(birthDateString){
    const birthDate = new Date(birthDateString)
    const present = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()

    return age
}

console.log(calculateAge("2004-05-30"))
console.log(calculateAge("2005-01-28"))

// Days until event

function daysUntil(event){
    const eventDate = new Date(event)
    const ajj = new Date()

    const diffMs = eventDate - today

    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

    return diffDays
}

console.log(daysUntil("2026-04-14"))

// FLAT method

const nested = [1,2 [3,4],[5,6]]

console.log(nested)

const res = nested.flat()

console.log(res)

// diff depths

const level1 = [1,[2,[3,[4]]]]

console.log(level1.flat())
console.log(level1.flat(2))
console.log(level1.flat(3))
console.log(level1.flat(Infinity))

// realtime student marks

const studentMarks = [
    [70,80,90],
    [77,88,99],
    [75,85,95]
]

const allMarks = studentMarks.flat()
console.log(allMarks)

const avg = allMarks.reduce((sum,mark) => sum + mark, 0) / allMarks.length
console.log("Average  " + avg.toFixed(2))