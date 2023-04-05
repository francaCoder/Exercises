// Agrupamento de uma função com seu escopo léxico

const external = () => {
    const book = "Evolucionismo: Uma História Fake Da Humanidade"
    const internal = () => {
        console.log(book.toUpperCase())    
    }

    // internal()
    console.log(book)
    console.log(internal())
}

// ao rodar external() não aparece nada porque no escopo dela ela somente declara uma constante e uma outra função

external()

// closure
const lexical = "oi léxico"

const safe = secret => ({
    // getSecret() {
    //     return secret
    // }

    getSecret: () => secret
})

const privateUserData = "Dado privado"
const obj = safe(privateUserData)

console.log(obj) // { getSecret: [Function: getSecret] }
console.log(obj.getSecret()) // como  ele é um dado privado ele não está disponível fora dessa closure

// o secret só pode ser acessado através da função getSecret
// Closures encapsulam dados privados dentro de objetos

const func = secret => () => secret
console.log(func(privateUserData)) // [Function (anonymous)]
console.log(func(privateUserData)()) // dado privado


// essa função () => secret que retorna o secret faz a mesma coisa que um método privilegiado faz, que é acessar o dado privado que está estabelecido na closure

// podemos invocar a função várias vezes passando um valor diferente para o dado privado

const privateUserData2 = "Dado privado 2"
const privateUserData3 = "Dado privado 3"

const getSecret2 = func(privateUserData2)
const getSecret3 = func(privateUserData3)

console.log(getSecret2())
console.log(getSecret3())