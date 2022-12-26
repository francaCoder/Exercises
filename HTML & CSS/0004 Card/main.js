const button = document.querySelector(".read_button")
const card = document.querySelector(".card")

button.addEventListener("click", () => {
    card.classList.toggle("active")

    if (card.classList.contains("active")) {
        return button.innerHTML = "Read less"
    }

    button.innerHTML = "Read more"
})