const redButton = document.querySelector("#red")
const yellowButton = document.querySelector("#yellow")
const greenButton = document.querySelector("#green")
const automaticButton = document.querySelector("#automatic")
const img = document.querySelector(".image")

// function red() {
//     img.classList.remove("yellow")
//     img.classList.remove("green")
//     img.classList.add("red")
// }

// function yellow() {
//     img.classList.remove("red")
//     img.classList.remove("green")
//     img.classList.add("yellow")
// }

// function green() {
//     img.classList.remove("red")
//     img.classList.remove("yellow")
//     img.classList.add("green")
// }

const colorList = {
    red: "images/vermelho.png",
    yellow: "images/amarelo.png",
    green: "images/verde.png",
}

function changeColor(color) {
    // src é o caminho da cor que for passada ao chamar a função, ou seja, a imagem
    const src = colorList[color]

    // vou adicionar o atributo src e vou passar o caminho da imagem
    img.src = src
    // img.classList.add("teste")
}

[redButton, yellowButton, greenButton].forEach(button => {
    // função anônima que só é chamada quando clicamos no botão
    // Como parâmetro da função nós passamos o id do botão, que são os mesmos das cores dentro do objeto colorList
    button.addEventListener("click", () => changeColor(button.getAttribute("id")))
});

let counter = 0
// Conversão de objeto para array com a finalizade de usarmos o index para fazer os loops
const arr = Object.keys(colorList)

function setIndex() {
    counter < 2 ? counter++ : counter = 0
}

function automatic() {
    // O src vai mudando para a cor da vez, assim puxando um novo path.
    img.src = colorList[arr[counter]]
    setIndex()

}

automaticButton.addEventListener("click", () => {
    // Executa a função setInterval a cada 1s
    setInterval(automatic, 1000)

    redButton.classList.toggle("displayn")
    yellowButton.classList.toggle("displayn")
    greenButton.classList.toggle("displayn")
    automaticButton.classList.toggle("displayn")
})