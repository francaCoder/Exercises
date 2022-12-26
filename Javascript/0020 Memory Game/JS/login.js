const button_name = document.querySelector(".login_input")
const button_play = document.querySelector(".login_button")
const form = document.querySelector(".login-form")


// Destructing - {}
// do nosso parâmetro event a gente já tira o target
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        // Se o nome tiver mais de 2 letras vamos remover o atributo "disabled" do botão
        button_play.removeAttribute("disabled")
    } else {
        button_play.setAttribute("disabled", "")
    }
}

button_name.addEventListener("input", validateInput)




const handleSubmit = (event) => {
    // Bloquear o comportamento padrão do formulário
    event.preventDefault()

    // 2 parâmetros 
    localStorage.setItem("Player", button_name.value)
    console.log("logando...")

    window.location = "./Pages/game.html"
}

form.addEventListener("submit", handleSubmit)
