"use strict"

const formatarDigito = (digito) => `0${digito}`.slice(-2)

const atualizar = (tempo) => {
    // Eu passo o tempo ppara a função porque ela vai precisar do tempo para colocar no html
    // Seleciona o bloco dos segundos e atualiza ele
    const segundos = document.querySelector("#segundos")
    const minutos = document.querySelector("#minutos")
    const horas = document.querySelector("#horas")
    const dias = document.querySelector("#dias")

    // Pega o tempo e divide por 60, a sobre que der é o que eu vou atrivuir aos segundos
    const qtdSegundos = tempo % 60
    // minutos - resto da divisão da constante acima * 60 para transformar em minutos
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const qtdDias = Math.floor((tempo / (60 * 60 * 24)))

    segundos.textContent = formatarDigito(qtdSegundos)
    minutos.textContent = formatarDigito(qtdMinutos)
    horas.textContent = formatarDigito(qtdHoras)
    dias.textContent = formatarDigito(qtdDias)
}

// A contagem regressiva vai receber um tempo
const contagemRegressiva = (tempo) => {
    // A função pararContagem para o intervalo do id
    const pararContagem = () => clearInterval(id)

    // A constante contar vai contar o tempo se o tempo for maior que 0
    const contar = () => {
        if (tempo === 0) {
            pararContagem()
        }
        console.log(tempo)

        // A função atualizar vai ser responsável por mostrar esse tempo lá no html
        atualizar(tempo)
        tempo--
    }
    const id = setInterval(contar, 1000)
}

const tempoRestante = () => {
    // 1 janeiro de 1970
    // yyyy--mm--dd
    const dataEvento = new Date("2022-12-08 20:00:00")
    const hoje = Date.now()
    // Divide por mil pois estava retornando em milisegundos
    return (dataEvento - hoje) / 1000

}

contagemRegressiva(tempoRestante())