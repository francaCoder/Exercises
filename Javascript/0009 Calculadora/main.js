const display = document.querySelector("#display")

// Buttons - pegue qualquer elemento que em seu id esteja escrito pelo menos a palavra tecla
const numbers = document.querySelectorAll("[id*='tecla']")
const operators = document.querySelectorAll("[id*='operador']")

// Só delcarei
// essa variável só é utilizada quando clicamos em algum operador, e quando clicamos a função atribui true para essa variável. Então não faz diferença começar vazia ou sendo true, pois não vamos usar ela antes de usar a função atualizarTexto.
let newNumber
let operator
let numeroAnterior

const operacaoPendente = () => operator !== undefined

const calcular = () => {
    // Ele não pode chegar calculando, deve verificar se existe uma operação pendente
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.innerHTML.replace(",", "."))
        newNumber = true
        const result = eval(`${numeroAnterior}${operator}${numeroAtual}`) 
        atualizarDisplay(result)
        // switch (operator) {
        //     case "+":
        //         atualizarDisplay(numeroAnterior + numeroAtual)           
        //         break;
            
        //     case "-":
        //         atualizarDisplay(numeroAnterior - numeroAtual)           
        //         break;

        //     case "*":
        //         atualizarDisplay(numeroAnterior * numeroAtual)           
        //         break;

        //     case "/":
        //         atualizarDisplay(numeroAnterior / numeroAtual)           
        //         break;
        
        //     default:
        //         break;
        // }
    }
}

const atualizarDisplay = (texto) => {
    // Essa função recebe o número clicado e verifica, se a variável newNumber for false ele vai concatenando os números, quando clicarmos em algum operador a variável newNumber vira true, sendo true ela limpa o display e insere o novo número clicado após o operador, em seguida a variável newNumber é atualizada para false e volta a concatenar os números.
    if (newNumber) {
        display.innerHTML = texto.toLocaleString("BR")
        newNumber = false
    } else {
        display.innerHTML += texto.toLocaleString("BR")
    }
}

// A função inserir número recebe um evento (o número que clicamos) e passa esse número/texto para a função atualizar display
const inserirNumero = (evento) => atualizarDisplay(evento.target.innerHTML) 

numbers.forEach(number => {
    // para cada evento de click eu vou chamar a função inserir número
    number.addEventListener("click", inserirNumero)
});

const selecionarOperador = (evento) => {
    // Só vai fazer isso se não for um número novo
    if (!newNumber) {
        calcular()
        // Atualiza a variável
        newNumber = true
        // Guarda o operador
        operator = evento.target.innerHTML
        // Guarda todo o valor que estava no display antes do usuário clicar em algum operador
        numeroAnterior = parseFloat(display.innerHTML.replace(",", "."))
        
        console.log([numeroAnterior, operator])
    }
}

operators.forEach(operator => {
    operator.addEventListener("click", selecionarOperador)
});


const ativarIgual = () => {
    calcular();
    operator = undefined
}

document.querySelector("#igual").addEventListener("click", ativarIgual)

document.querySelector("#limparDisplay").addEventListener("click", () => display.innerHTML = "")

const limparCalculo = () => {
    display.innerHTML = ""
    operator = undefined
    newNumber = true
    numeroAnterior = undefined
}
document.querySelector("#limparCalculo").addEventListener("click", limparCalculo)


const removeLastNumber = () => {
    display.innerHTML = display.innerHTML.slice(0, -1)
}
document.querySelector("#backspace").addEventListener("click", removeLastNumber)


const inverterSinal = () => {
    newNumber = true
    atualizarDisplay(display.innerHTML * -1)
}
document.querySelector("#inverter").addEventListener("click", inverterSinal)


const inserirDecimal = () => {
    if (display.innerHTML.indexOf(",") == -1) {
        if (display.innerHTML.length > 0) {
            atualizarDisplay(",")
        } else {
            atualizarDisplay("0,")
        }
    }
}
document.querySelector("#decimal").addEventListener("click", inserirDecimal)

const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
};


const mapearTeclado = (evento) => {
    console.log(evento.key)
    const tecla = evento.key

    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1
    if (teclaPermitida()) {
        document.getElementById(mapaTeclado[tecla]).click()
    }
}

// Lembrando que o addEventListener manda o "evento" automaticamente para essa função
document.addEventListener("keydown", mapearTeclado)