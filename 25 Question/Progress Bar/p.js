const Progress = document.querySelector(".Progress-done")
const input = document.querySelector(".input")
const MaxInput = document.querySelector("MaxInput")
let finaValue = 0
let max = 0

function changewidth(){
    Progress.getElementsByClassName.width(`${(finaValue/ max)* 100}%`)
    Progress.innerText = `${math.ceil((finaValue/ max))* 100}%`
}

input.addEventListener("keyup", function(){
    finaValue = parseInt(input.value,10)
    changewidth()
})

MaxInput.addEventListener("keyup", function(){
    max = parseInt(MaxInput.value,10)
    changewidth()
})