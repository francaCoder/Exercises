// Vamos usar uma função que não recebe todos os parâmetros de uma só vez

// A função partial vai receber uma função e os primeiros argumentos
function partial(fn, ...args) {
    // e a função partial retorna uma outra função que espera novos argumentos
    return function(...newArgs) {
        // que por fim retorna a invocação da função original, porém com todos os argumentos
        // console.log(...newArgs)
        console.log(newArgs.includes(40))
        return fn(...args, ...newArgs)
    }
}

// 5 parâmetros
function soma5(a, b, c, d, e) {
    return a + b + c + d + e
}

// Passando a função e os primeiros argumentos

const somaFaltam2 = partial(soma5, 10, 20, 30)

// após um tempo eu vou passar os outros argumentos
setTimeout(() => {
    // console.log(somaFaltam2(40, 50))
}, 1000);


// 

function lista(juncao, ...itens) {
    const separadoPorVirgula = itens.slice(0, -1).join(", ")
    const ultimoItem = itens.pop()
    return `${separadoPorVirgula} ${juncao} ${ultimoItem}`
}

// a junção é e
// Os itens são os outros argumentos
// .slice(0, -1) pega todos menos o último
// Pego todos esses e coloco vírgula entre eles
// Removo o último item e coloco em uma variável
// Faço a junção da frase
console.log(lista("e", "azul", "cinza", "amarelo", "verde"))


// ex 2

function lista(juncao, ...itens) {
    const separadoPorVirgula = itens.slice(0, -1).join(", ")
    const ultimoItem = itens.pop()
    return `${separadoPorVirgula} ${juncao} ${ultimoItem}`
}

// Uma função que pede uma função como parâmetro e uma junção
// Ela retorna o array de itens que automaticamente já é executado 
// e dentro ela retorna a função que passamos inicialmente(closure), usando a junção e os itens

// function partial(func, juncao) {
//     return (...itens) => {
//         return func(juncao, ...itens)    
//     }
// }

const partial = (func, juncao) => (...itens) => func(juncao, ...itens)


const listaE = partial(lista, "e")
const listaOu = partial(lista, "ou")
const listaTalvez = partial(lista, "talvez")

console.log(listaE("azul", "amarelo", "verde"))
console.log(listaOu("azul", "amarelo", "verde"))
console.log(listaTalvez("azul", "amarelo", "verde"))

