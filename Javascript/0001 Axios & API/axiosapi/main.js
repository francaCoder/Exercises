const url = "http://localhost:5500/api"
const newUser = {
    name: "Matheus França",
    avatar: "http://lorempixel.com/400/200/",
    city: "Rio do Sul"
}

const userUpdate = {
    name: "Mayk Brito",
    avatar: "https://github.com/maykbrito",
    city: "Amazonas"
}

function getUser() {
    axios.get(url)
        .then(response => {
            // console.log(response)
            // O Axios foi até a URL e recebeu a resposta RESPONSE, e esse response é um objeto com algumas propriedades. A que nos interessa é o DATA, por isso fazemos um response.data
            const data = response.data
            // Acessando a div e trocando o conteúdo para a resposta de data em formato JSON
            renderResult.textContent = JSON.stringify(data)
        })
            .catch(error => console.log(error))
}

// getUser()

// Cadastrando novos usuários na API

function addNewUser() {
    // 2 Parâmetros, aonde eu vou fazer o post e o que eu vou enviar para a api
    axios.post(url, newUser).then(response => {
        window.alert(response.data)
    }).catch(error => console.log(error))
}

// addNewUser()

// Atualizando dados com update (put) (users com id 3 e 4)

function updateUser() {
    // 2 Parâmetros, a URL e o que você quer alterar
    // Temos que passar também o id do usuário pela url, colocando/[id]
    axios.put(`${url}/4`, userUpdate).then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

// updateUser()

function deleteUser() {
    // Também temos que passar a URL com um ID para apagar
    axios.delete(`${url}/9`).then(response => {
        // O delete assim como os outros também nos retorna apenas um aviso
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

// deleteUser()

function getOneUser(id) {
    axios.get(`${url}/${id}`).then(response => {
        const data = response.data
        renderResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getOneUser(5)