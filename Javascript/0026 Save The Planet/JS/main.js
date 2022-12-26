// Sentido da Movimentação
let sizeScreenWidth, sizeScreenHeight
let directionNavAxisX, directionNavAxisY
let positionNavAxisX, positionNavAxisY
let jogo 
let spacialNav
let velocityShot
let frames
let bombsAmount, painelBombsAmount
let totalBombs
let velocityBombs
let planetLife, barraPlaneta
let intervalCreateBombs
let indexExplosion
let indexSong
let telamsg


const teclaDw = (event) => {
    let tecla = event.keyCode

    //  -1 ele sobe, 1 ele desce
    if (tecla == 37)  { // left
        directionNavAxisX =- 1
    } else if (tecla == 39) { // right
        directionNavAxisX = 1
    } else if (tecla == 38) { // cima
        directionNavAxisY =- 1
    } else if (tecla == 40) { // baixo 
        directionNavAxisY = 1
    } else if (tecla == 32) {
        // tiro
        //  Chamo a função do tiro passando a posição da nave
        //  + 17 = centralizando na imagem
        shot(positionNavAxisX + 17, positionNavAxisY)
    }
}

const teclaUp = (event) => {
    let tecla = event.keyCode

    if ((tecla == 38) || (tecla == 40))  { // left
        directionNavAxisY = 0
    } else if ((tecla == 37) || (tecla == 39)) {
        directionNavAxisX = 0
        // tiro
    }
}

const createBombs = () => {
    if (play) {
        // Se o jogo estiver rolando eu vou criar as bombas

        // Primeiramente eu tenho que definir a posição das bombas, somente no eixo X, porque o Y vai ser sempre o mesmo
        let y = 0
        let x = Math.random() * sizeScreenWidth // Posição aleatória entre 0 e o tamanho da tela
        let bomb = document.createElement("div")
        let att1 = document.createAttribute("class")
        let att2 = document.createAttribute("style")

        att1.value = "bomb"
        att2.value = `left: ${x}px; top: ${y}px`

        // Depois de criados preciso adicionar esses atributos na bomba
        bomb.setAttributeNode(att1)
        bomb.setAttributeNode(att2)

        // Adicionar elemento na tela
        document.body.appendChild(bomb)

        // A cada bomba que for criada, vamos subtrair do bombsAmount, para uma hora ele ser zerado e acabar o jogo
        bombsAmount--
    }
}

const bombsControl = () => {
    let bombs = document.querySelectorAll(".bomb")

    // Preciso controlar bomba por bomba para ver se ela já chegou no planeta e explodir ou não
    for (let index = 0; index < bombs.length; index++) {
        // Verificar se a bomba existe para movimentá-la
        if (bombs[index]) {
            // Posição da bomba no eixo Y
            let positionBomb = bombs[index].offsetTop

            // console.log(positionBomb)
            
            //  Posição da bomba
            // A diferença do tiro é que a posição da bomba vai ser incrementada, fazendo ela descer ao invés de subir
            positionBomb += velocityBombs

            // Atualizar posição da bomba
            // Faz com que a bomba seja deslocado para baixo
            bombs[index].style.top = `${positionBomb}px`

            // Se a posição da bomba for maior que o tamanho da nossa tela, significa que ele achegou no planeta, então eu preciso tirar ela
            if (positionBomb > sizeScreenHeight) {
                // A cada bomba que atingir o planeta, ele vai perder 10 de vida
                planetLife -= 10
                renderExplosion(2, bombs[index].offsetLeft, null)
                bombs[index].remove()
            }
        }
    }
}

const collisionShotBombs = (shot) => {
    let bombs = document.querySelectorAll(".bomb")
    for (let index = 0; index < bombs.length; index++) {
        if (bombs[index]) {
            // Se a bomba existir eu vou fazer o teste de colisão
            // Preciso comparar o top da bomba com o tiro
            // Preciso comparar o left da bomba com o tiro

            // +40 Porque é o tamanho da altura do gif da bomba
            // +6 Parte de baixo do tiro

            // +24 Largura da bomba
            if (
                ( // Y em colisão
                    (shot.offsetTop <= (bombs[index].offsetTop + 40)) // cima tiro baixo bomba
                    && 
                    (shot.offsetTop + 6 >= (bombs[index].offsetTop)) // baixo tiro cima bomba
                )
                &&
                ( // X em colisão
                    (shot.offsetLeft <= (bombs[index].offsetLeft + 24)) // esquerda tiro direita bomba
                    && 
                    (shot.offsetLeft + 6 >= (bombs[index].offsetLeft)) // direita tiro esquerda bomba
                )
            ) {
                // explosion(type/x/y) (no ar)
                // x - 25 para centralizar
                renderExplosion(1, bombs[index].offsetLeft - 25, bombs[index].offsetTop)
                // Se houve a colisão precisamos remover a bomba e o tiro
                bombs[index].remove()
                shot.remove()
            }
        }
    }
}

const renderExplosion = (type, x, y) => {
    /*
        type:
            1 → air-explosion
            2 → floor-explosion
    */

    // Atraso na remoção das bombas
    if (document.querySelector(`#explosion${(indexExplosion-4)}`)) {
        document.querySelector(`#explosion${(indexExplosion-4)}`).remove()
    }

    // Criar elementos → div → img → audio
    let explosion = document.createElement("div")
    let img = document.createElement("img")
    let song = document.createElement("audio")

    // Div
    let att1 = document.createAttribute("class")
    let att2 = document.createAttribute("style")
    let att3 = document.createAttribute("id")

    //img
    let att4 = document.createAttribute("src")

    // audio
    let att5 = document.createAttribute("src")
    let att6 = document.createAttribute("id")

    att3.value = `explosion${indexExplosion}`
    if (type == 1) {
        // ar
        att1.value = "air-explosion"
        att2.value = `left: ${x}px; top: ${y}px`

        // cada um tem sua imagem
        att4.value = "./Images/explosao_ar.gif?" + new Date()
    } else {
        // chão
        att1.value = "floor-explosion"
        // -57 tamanho da bomba
        // -17 descontar o tamanho da bomba e ficar centralizado
        att2.value = `left: ${x - 17}px; top: ${sizeScreenHeight - 57}px`

        // cada um tem sua imagem
        // new Date - Manobra para utilizar o gif várias vezes
        att4.value = "./Images/explosao_chao.gif?" + new Date()
    }
    // Mesmo som para as duas explosões
    att5.value = "./Songs/exp1.mp3?" + new Date()
    att6.value = `song${indexSong}`
    
    // Adicionar esses atributos aos elementos
    explosion.setAttributeNode(att1)
    explosion.setAttributeNode(att2)
    explosion.setAttributeNode(att3)
    
    img.setAttributeNode(att4)
    
    song.setAttributeNode(att5)
    song.setAttributeNode(att6)
    
    // Inserir os elementos na div
    explosion.appendChild(img)
    explosion.appendChild(song)
    
    // Inserir a div no document
    document.body.appendChild(explosion)
    
    // Play no som
    document.querySelector(`#song${indexSong}`).play()

    // Cada vez que criar uma explosão eu somo 1 ao índice explosão, para o id da explosão ser dinâmico
    indexExplosion++
    indexSong++
}

const shot = (x, y) => {
    // O tiro precisa ser criado de acordo com a posição da nave

    // Criação de elementos
    let Shot = document.createElement("div")
    let att1 = document.createAttribute("class")
    let att2 = document.createAttribute("style")

    // shotNav - classe
    att1.value = "shot-nav"
    att2.value = `left:${x}px; top:${y}px`

    Shot.setAttributeNode(att1)
    Shot.setAttributeNode(att2)

    // Adicionar o elemento na tela
    document.body.appendChild(Shot)

    // A cada vez que o espaço (tecla 32) é apertado, é criado uma div da classe shotNav com o style que contém as posições dinâmicas, e essa div é adicionada no meu document
}

const shotsControl = () => {
    let shots = document.querySelectorAll(".shot-nav")
    let shotsAmount = shots.length

    for (let index = 0; index < shotsAmount; index++) {
        
        if (shots[index]) {
            let positionShot = shots[index].offsetTop

            // console.log(positionShot)
            
            //  Posição do tiro
            positionShot -= velocityShot

            // Atualizar posição do tiro
            // Faz com que o tiro seja deslocado pra cima
            shots[index].style.top = `${positionShot}px`

            collisionShotBombs(shots[index])

            // Se o tiro sair da tela, temos que remover ele para ele não continuar ocupando processamento
            if (positionShot < 0) {
                shots[index].remove()
                // ou

                // document.body.removeChild(shots[index])
            }
        }
        
    }

}

const moveNav = () => {
    // se eu pressiono a tecla para ceima, ele define directionNavAxisY como 1 (subir), então ele vai a quantidade de pixels da variável velocityNav
    positionNavAxisX += directionNavAxisX * velocityNav
    positionNavAxisY += directionNavAxisY * velocityNav

    // Uma vez definida as variáveis de posicionamento, basta trocarmos novamente a posição da nave na tela
    spacialNav.style.left = `${positionNavAxisX}px`
    spacialNav.style.top = `${positionNavAxisY}px`
}

const resultGame = () => {
    barraPlaneta.style.width = `${planetLife}px`
    if (bombsAmount <= 0) {
        jogo = false
        clearInterval(intervalCreateBombs)
        telamsg.style.backgroundImage = "url('./Images/vitoria.jpg')"
        telamsg.style.display = "block"
    }

    if (planetLife <= 0) {
        jogo = false
        clearInterval(intervalCreateBombs)
        telamsg.style.backgroundImage = "url('./Images/derrota.jpg')"
        telamsg.style.display = "block"
    }
}

const gameLoop = () => {
    /* request animation frame */

    if (jogo) {
        // Funções de controle
        //  Controle da nave, das bombas, tiro da nave, etc...

        // A cada iteração essa função vai ser chamada, ela verifica a direção da nave e posiciona ela novamente na tela
        moveNav()
        shotsControl()
        bombsControl()
        resultGame()
    }

    // 
    frames = requestAnimationFrame(gameLoop)

}

const playAgain = () => {

    let bombs = document.querySelectorAll(".bomb")
    for (let index = 0; index < bombs.length; index++) {
        if (bombs[index]) {
            bombs[index].remove()
        }
    }
    telamsg.style.display = "none"
    
    clearInterval(intervalCreateBombs)
    cancelAnimationFrame(frames)
    
    planetLife = 300
    positionNavAxisX = sizeScreenWidth / 2 
    positionNavAxisY = sizeScreenHeight / 2 
    
    spacialNav.style.left = `${positionNavAxisX}px`
    spacialNav.style.top = `${positionNavAxisY}px`
    
    bombsAmount = 150
    jogo = true
    
    intervalCreateBombs = setInterval(createBombs, 1700)
    gameLoop()
}

const play = () => {
    /* inicializar todos os componentes do nosso game */

    // Ao iniciar o jogo quero que ele esteja parado até que se clique no botão jogar
    jogo = false

    // Inicialização da tela
    sizeScreenWidth = window.innerWidth
    sizeScreenHeight = window.innerHeight

    // Inicialização da Nave
    spacialNav = document.querySelector("#spacial-nav")
    directionNavAxisX=directionNavAxisY = 0

    // Posição da nave (meio da tela)
    // Pega cada direção da tela e divide por 2, assim temos o meio da tela
    positionNavAxisX = sizeScreenWidth/2
    positionNavAxisY = sizeScreenHeight/2

    spacialNav.style.left = `${positionNavAxisX}px`
    spacialNav.style.top = `${positionNavAxisY}px`

    // Velocidade da nave (unidade de medida - px)
    velocityNav = 5

    // Velocidade do tiro
    velocityShot = 5

    // Controle de bombas
    // Quero 150 bombas no meu jogo
    bombsAmount = 150

    // Velocidade das bombas
    velocityBombs = 3

    // Intervalo de criação de bombas
    // clearInterval(intervalCreateBombs)
    // intervalCreateBombs = setInterval(createBombs, 1700)

    // controles de explosão
    indexExplosion = 0

    // controle de som
    indexSong = 0

    // Controles do planeta
    planetLife = 300
    barraPlaneta = document.querySelector("#barra-planeta")
    barraPlaneta.style.width = `${planetLife}px`

    // Telas
    telamsg = document.querySelector("#tela-msg")
    telamsg.style.backgroundImage = "url('./Images/intro.jpg')"
    telamsg.style.display = "block"
    document.querySelector("#btn-jogar").addEventListener("click", playAgain)

    // Disparando o game loop
    // Somente no play again
    // gameLoop()
}


// Quando a tela for carregada, chame a função play, que é a função que inicializa todos os componentes
window.addEventListener("load", play)
/* adicionar evento no document (tela toda) */
/* Keydown é a tecla pressionada, não a setinha. */
document.addEventListener("keydown", teclaDw)

// keyup é quando a tecla não está sendo mais pressionada, sendo assim ela chama a função telcaUp que zera a movimentação da nav para ambos os eixos
document.addEventListener("keyup", teclaUp)