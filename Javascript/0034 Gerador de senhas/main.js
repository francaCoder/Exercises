const sizePassword = document.querySelector("#valor")
const sliderInput = document.querySelector("#slider")
const btnGeneratePassword = document.querySelector("#button")
const containerPassword = document.querySelector("#container-password")
const password = document.querySelector("#password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*()_-"
let newPassword = ""


const generatePassword = () => {
    // alert("Let's create your password")
    let pass = ""
    for (let index = 0, n = charset.length; index < sliderInput.value; index++) {
        // gerar um número aleatório com o tamanho de caracteres que eutenho na minha string, e depois disso eu pego aquele index
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    // console.log(pass)
    // console.log(sliderInput.value)

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    newPassword = pass
}

const copyPassword = () => {
    // Só salva a senha depois que aperta no ok do alert
    alert("Successfully Saved Password!")
    navigator.clipboard.writeText(newPassword)
}


sliderInput.oninput = () => {
    sizePassword.innerHTML = sliderInput.value
}

btnGeneratePassword.addEventListener("click", () => {
    generatePassword()
})

containerPassword.addEventListener("click", () => {
    copyPassword()
})
