const inputBusca = document.querySelector("#input-busca")
const tbodyBebidas = document.querySelector("#tabela-bebidas")

// Precisamos fazer com que o js escute o evento de teclar

// keyup → Teclei e tirei o dedo
inputBusca.addEventListener("keyup", (e) => {
    let tableRows = tbodyBebidas.querySelectorAll("tr")
    let request = inputBusca.value.toLowerCase()

    for (const position in tableRows) {
        if (true === isNaN(position)) {
            continue
            // Se for verdade que não é um número....
        }
        // console.log(position)

        let rowContent = tableRows[position].innerHTML.toLowerCase()
        // A gente vai pergar o conteúdo de cada linha e ver se o valor que o usuário digitou existe dentro daquela linha

        // Se naquela linha tem o que eu estou procurando...
        if (!rowContent.includes(request)) {
            tableRows[position].style.display = "none"
        } else {
            tableRows[position].style.display = ""
        }
    }
})