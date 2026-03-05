// ques1
const head = document.getElementById("heading")
const btn = document.getElementById("headbtn")

btn.addEventListener("click", function(){
    head.textContent = "Welcome To Classroom"
})

// ques3
const answer = document.getElementById("ans")
const button = document.getElementById("ansbtn")

button.addEventListener("click", function(){
    answer.textContent = "ANSWER: TextContent is used when we want to change the content of a particular div/heading/paragrapgh tags. InnerHTML is used when we want to give them HTML built-in styling like bold/underline...etc."
})

// ques4
const para = document.getElementById("updated")
const pbtn = document.getElementById("parabtn")

pbtn.addEventListener("click", function(){
    para.innerHTML = "<b>UPDATED</b>"
})

// ques5
const image = document.getElementById("imagee")
const psrc = document.getElementById("imgsrc")
const butn = document.getElementById("imgbtn")

const source = image.getAttribute("src")

butn.addEventListener("click", function(){
    psrc.innerHTML = source
})

// ques6
const pset = document.getElementById("setans")
const sbtn = document.getElementById("setbtn")

sbtn.addEventListener("click", function(){
    pset.textContent = "ANSWER:  SetAttribute() help you change the attributes of any tag."
})

// ques7
const links = document.getElementById("link")
const lbtn = document.getElementById("linkbtn")

lbtn.addEventListener("click", function(){
    links.setAttribute("href", "https://domain.app")
    links.textContent = "Domain"
})

// ques19

const div = document.getElementById("pstyle")
const stbtn = document.getElementById("stylebtn")

stbtn.addEventListener("click", function(){
    div.style.fontSize = "18px"
})