/* Para selecionar atributos usamos colchetes */
const cells = document.querySelectorAll("[data-cell]")
const board = document.querySelector("[data-board]")
const divResult = document.querySelector("[data-winning-message]")
const winninMessageText = document.querySelector("[data-winning-message-text]")
const restartButton = document.querySelector("[data-restart-button]")


let isCircleTurn

const winningCombinations = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6 ,7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
]

const startGame = () => {

    isCircleTurn = false
    for (const cell of cells) {
        // Resetar o jogo - remover as classes X e circle de todas as células
        cell.classList.remove("circle")
        cell.classList.remove("x")
        cell.removeEventListener("click", handleClick)

        // Chamamos a função e através de um terceiro parâmetro definimos que ela só vai ser executada uma vez
        cell.addEventListener("click", handleClick, {once: true})
    }


    board.classList.add("x")

    // Escondendo a tela de vitória
    setBoardHoverClass()
    divResult.classList.remove("show-winning-message")

}

const endGame = (draw) => {
    if (draw) {
        winninMessageText.innerHTML = "Deu velha!"
    } else {
        winninMessageText.innerHTML = isCircleTurn ? "O Venceu!" : "X Venceu!"
    }

    // tira o display: none da divResult
    divResult.classList.add("show-winning-message")
}

// Vai receber o jogador atual
const checkForWin = (currentPlayer) => {
    // Retorna se tem alguma combinação válida
    return winningCombinations.some((combination) => {
        // Para cada combinação verifica se o index daquela combinação está preenchido com o currentPlayer
        return combination.every((index) => {
            return cells[index].classList.contains(currentPlayer)
        })
    })
}

const checkForDraw = () => {
    return [...cells].every(cell => {
        return cell.classList.contains("circle") || cell.classList.contains("x")
    })
}

const setBoardHoverClass = () => {
    /* remover tudo antes de mudar a jogada para não duplicar */
    board.classList.remove("circle")
    board.classList.remove("x")

    if (isCircleTurn) {
        board.classList.add("circle")
    } else {
        board.classList.add("x")
    }
}

const swapTurns = () => {
    /* inverter a jogada */
    isCircleTurn = !isCircleTurn

    setBoardHoverClass()
}
    

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const handleClick = (event) => {
    /* 1 - Colocar o X ou O */
    const cell = event.target
    const classToAdd = isCircleTurn ? "circle" : "x"

    placeMark(cell, classToAdd)

    /* 2 - Checar vitória */
    // Guardar os elementos que, quando selecionados em ordem vão sinalizar uma vitória
    // guardar as combinações
    const isWin = checkForWin(classToAdd)
    const isDraw = checkForDraw()
    if (isWin) {
        endGame(false)
        /* 3 - Checar impate */
    } else if (isDraw) {
        endGame(true)
    } else { // Se não for uma vitória e nem um empate a gente quer mudar o jogador
        /* 4 - Mudar o símbolo */
        swapTurns()
    }

}

startGame()

restartButton.addEventListener("click", startGame)