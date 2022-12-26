// Não preciso definir no Js quem é o "el" e nem criar variáveis/constantes quie pegando os botões porquê as funções/parâmetros já foram passados direto no html

// Quando cada função for chamada, eu passo o content e vejo o display dele, e daí eu vou fazendo as alterações.

function hide(el) {
    document.getElementById(el).style.display = "none"
}

function unhide(el) {
    document.getElementById(el).style.display = "block"
}

function toggle(el) {
    let display = document.getElementById(el).style.display
    if (display === "none") {
        document.getElementById(el).style.display = "block"
    } else {
        document.getElementById(el).style.display = "none"
    }
}