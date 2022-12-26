const pokemonGif = document.querySelector(".pokemon-gif")
const pokemonNumber = document.querySelector(".pokemon-number")
const pokemonName = document.querySelector(".pokemon-name")
const form = document.querySelector(".form")
const inputSearch = document.querySelector(".input-search")
const prevButton = document.querySelector(".btn-prev")
const nextButton = document.querySelector(".btn-next")

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon/"
    const APIResponse = await fetch(`${urlBase}${pokemon}`)

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading..."
    pokemonNumber.innerHTML = ""
    const data = await fetchPokemon(pokemon)

    if (data) {
        pokemonGif.style.display = "block"
        pokemonGif.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
        pokemonNumber.innerHTML = data.id
        pokemonName.innerHTML = data.name
        searchPokemon = data.id
        inputSearch.value = ""
    } else {
        pokemonGif.style.display = "none"
        pokemonName.innerHTML = "Not Found :c"
        inputSearch.value = ""
    }

}


form.addEventListener("submit", (event) => {
    
    event.preventDefault()
    
    console.log("enviando...")
    renderPokemon(inputSearch.value.toLowerCase())
    inputSearch.value = ""

})

prevButton.addEventListener("click", () => {
    if (searchPokemon > 1) {
        searchPokemon--
        renderPokemon(searchPokemon)    
    }
})

nextButton.addEventListener("click", () => {
    searchPokemon++
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)