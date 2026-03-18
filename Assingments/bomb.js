const boom = document.getElementById("boom")
const input = document.getElementById("write")
const btn = document.getElementById("bbtn")

let timer = 10

boom.textContent = timer

let time = setInterval(function(){
    timer--
    boom.textContent = timer

    if(timer === 0){
        boom.textContent = "BOMB HAS BEEN BLASTED"
        clearInterval(timer)
    }
}, 1000)

btn.addEventListener("click", function(){
    if(input.value === "defuse"){
        boom.textContent = "BOMB HAS BEEN DEFUSED"
        clearInterval(timer)
    }
})