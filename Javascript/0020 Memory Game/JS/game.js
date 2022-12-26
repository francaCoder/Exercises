// Criar um script que carregue os cards e as posições aleatoriamente de forma automática

const spanPlayer = document.querySelector(".player")
const spanTimer = document.querySelector(".timer")
const grid = document.querySelector(".grid")

const characters = [
    "beth",
    "jerry",
    "jessica",
    "morty",
    "pessoa-passaro",
    "pickle-rick",
    "rick",
    "summer",
    "meeseeks",
    "scroopy",
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card")

    if (disabledCards.length === 20) {
        clearInterval(this.loop)
        alert(`Parabéns ${spanPlayer.innerHTML}! Seu tempo foi de: ${spanTimer.innerHTML}`)
    }
}

// Essa variáveis vão ser utilizadas para comparar se as cartas viradas são iguais ou não
let firstCard = ""
let secondCard = ""

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute("data-character")
    const secondCharacter = secondCard.getAttribute("data-character")

    if (firstCharacter === secondCharacter) {
        // Ao acertar, deixo as cartas com aparência de desabilitadas
        // Para as cartas não virarem novamente, devo adicionar a classe de desabilitar na parte da frente das cartas
        firstCard.firstChild.classList.add("disabled-card")
        secondCard.firstChild.classList.add("disabled-card")

        firstCard = ""
        secondCard = ""

        checkEndGame()

    } else {
        // Se o usuário não acertou, basta remover a classe que revela as cartas
        // Preciso colocar isso dentro de um setTimeout para que dê tempo de vizualizar as cartas, caso contrário a segunda carta nem viraria, porquê o programa entende que já é a carta errada e remove a classe

        setTimeout(() => {
            firstCard.classList.remove("reveal-card")
            secondCard.classList.remove("reveal-card")

            // Esvazio as variáveis para podermos escolher novas cartas
            firstCard = ""
            secondCard = ""

        }, 500)
    }
}

const revealCard = ({ target }) => {

    // Verificar se essa carta já possui a classe, pois ela não pode fazer mais nada se ela já estiver virada e o usuário clicar nela novamente
    if (!target.parentNode.className.includes("reveal-card")) {
        target.parentNode.classList.add("reveal-card")

        if (firstCard === "") {
            firstCard = target.parentNode
        } else if (secondCard === "") {
            secondCard = target.parentNode

            // Ao virar a segunda carta eu preciso rodar uma função que verifica se as duas cartas são iguais
            checkCards()
        }
    }

    // target.parentNode.classList.add("reveal-card")
}

const createCard = (character) => {
    // const card = document.createElement("div")
    // const front = document.createElement("div")
    // const back = document.createElement("div")

    // card.className = "card"
    // front.className = "face front"
    // back.className = "face back"

    const card = createElement("div", "card")
    const front = createElement("div", "face front")
    const back = createElement("div", "face back")

    front.style.backgroundImage = `url("../images/${character}.png")`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click", revealCard)
    card.setAttribute("data-character", character)

    // grid.appendChild(card)
    return card
}

// createCard()

const loadGame = () => {

    // Ao invés de fazer o forEach no meu array principal das cartas, eu faço no array que eleas foram duplicadas, para gerar 2 cartas para cada uma
    const duplicatedCards = [...characters, ...characters]

    // Usar o forEach no array embaralhado
    const shuffledArray = duplicatedCards.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((character) => {
        // para cada carta eu vou chamar a função de criar carta
        const card = createCard(character)
        grid.appendChild(card)
    })
}

const startTimer = () => {

    this.loop = setInterval(() => {
        // Ao colocar o + na frente da string, ele já converte automaticamente para Number
        const currentTime = Number(spanTimer.innerHTML)
        spanTimer.innerHTML = currentTime + 1

    }, 1000);

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem("Player")
    startTimer()
    loadGame()
}