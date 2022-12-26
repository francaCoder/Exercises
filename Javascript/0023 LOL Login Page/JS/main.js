const inputs = document.querySelectorAll('.input')
const loginButton = document.querySelector(".login-button")


const handleFocus = (event) => {
    const span = event.target.previousElementSibling
    span.classList.add("span-active")
}

const handleFocusOut = (event) => {
    // Só vai tirar a nossa classe de span ativo se o usuário não tiver escrito nada dentro

    if (event.target.value === "") {
        const span = event.target.previousElementSibling
        span.classList.remove("span-active")
    }
}

const handleChange = () => {
    // array destructing
    const [username, password] = inputs    

    if (username.value && password.value.length >= 8) {
        loginButton.removeAttribute("disabled")
    } else {
        loginButton.setAttribute("disabled", "")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", handleFocus)
})

inputs.forEach((input) => {
    input.addEventListener("focusout", handleFocusOut)
})

inputs.forEach((input) => {
    input.addEventListener("input", handleChange)
})