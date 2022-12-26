const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")


const handleJump = () => {
    mario.classList.add("jump")

    setTimeout(() => {
        mario.classList.remove("jump")
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    // console.log(pipePosition)

    // Após isso conseguimos pegar qualquer propriedade aplicada no mário no nosso css
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    console.log(marioPosition)

    // Para verificar se o mário bateu ou não, vamos verificar a distânicia do bottom que o mário estava quando o pipe chegou a 124px, se esse distância for maior que o pipe, então ele pulou


    if (pipePosition <= 124 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = "none"
        // Posição que o pipe encostou no mário
        pipe.style.left = `${pipePosition}px`

        // Parar a animação do mario e o mário no lugar que ele bateu no tubo
        mario.style.animation = "none"
        // O mário vai parar exatamente na distância em que ele bateu quando estava distante do chão
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./Images/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        // Quando perder parar o loop
        clearInterval(loop)
    }

}, 10);


document.addEventListener("keydown", handleJump)