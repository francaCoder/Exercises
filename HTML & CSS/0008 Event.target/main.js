/*
    nome da tag do elemento - event.target.nodeName/tagName
    classe do elemento - event.target.className
    id do elemento - event.target.id
*/

let result = document.querySelector("#result")

document.addEventListener("click", (event) => {
    result.innerHTML = `Elemento ${event.target.nodeName}${(event.target.id).slice(-1)} X: ${event.pageX} Y: ${event.pageY}` 
})


//

// Podemos fazer uma seleção de elementos (plural) e que vão ficar guardados em um array/HTML collection, mas também podemos selecionar um específico através do array
let elements = document.getElementsByClassName("elemento")[1]

// ou

// document.querySelectorAll(".elemento")[1]

// Elemento individual
// let elemento = document.querySelector(".class_H1")

console.log(elements)

// Identificar um elemento a partir do evento de click

document.addEventListener("click", (e) => {
    console.log(e.target.className)
})
