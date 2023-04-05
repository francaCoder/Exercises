// CRUD - Create / read / update / Delete


const modal = document.querySelector("#modal")
const cadastrarBtn = document.querySelector("#cadastrarCliente")
modalClose = document.querySelector("#modalClose")

const openModal = () => {
    modal.classList.add("active")
}

const closeModal = () => {
    modal.classList.remove("active")
}

// Vamos criar uma função para para etapa do CRUD interagir com o localStorage

const templateClient = {
    name: "Matheus",
    email: "matheus@gmail.com",
    cel: "11923456789",
    city: "São Paulo"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? []

const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(db_client))


const createClient = (client) => {
    // Cada cliente deve ter os 4 dados necessários para fazer o cadastro:
    // nome, email, cell, cidade
    
    // Add to localStorage
    // set / get
    
    // Key & value
    // (o localStorage só aceita strings como valor)

    //Pega o que tem no localStorage e tranforma em JSON e envia para a variável client
    // const db_client = JSON.parse(localStorage.getItem("db_client")) ?? []

    // ?? [] = se isso não existir retorne um array vazio

    const db_client = getLocalStorage()
    db_client.push(client) // acrescente mais um cliente
    setLocalStorage(db_client)

    // depois mando de volta para o banco de dados
    // localStorage.setItem("db_client", JSON.stringify(db_client))

}

const readClient = () => getLocalStorage()

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client

    // novo db
    setLocalStorage(dbClient)
}  

// Eventos

// Ao clicar em cadastrar o modal é aberto, pois nele foi adicionado a classe active
cadastrarBtn.addEventListener("click", () => {
    openModal()
})

// Ao clicar no X ele remove do modal a classe active
modalClose.addEventListener("click", () => {
    closeModal()
})


