const sprites = new Image()
const canvas = document.querySelector("#game-canvas")
const contexto = canvas.getContext("2d")

sprites.src = "./Images/sprites.png"



const loop = () => {
    contexto.drawImage(
        sprites,
        0, 0, //Sprite x e Y
        33, 24, // Tamanho do recorte da sprite
        10, 50, // Ponto de partida para desenho
        33, 24 // Dentro do canvas, qual será o tamanho da nossa imagem
    )

    requestAnimationFrame(loop)
}

loop()