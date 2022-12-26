"use strict"

const images = [
    {"id": 1, "url": "./images/chrono.jpg"},
    {"id": 2, "url": "./images/inuyasha.jpg"},
    {"id": 3, "url": "./images/ippo.png"},
    {"id": 4, "url": "./images/tenchi.jpg"},
    {"id": 5, "url": "./images/tenjhotenge.jpg"},
    {"id": 6, "url": "./images/yuyuhakusho.jpg"},
]

const containerItems = document.querySelector("#container-items")

// o loadImages vai carregar as imagens da nossa coleção
const loadImages = (images, container) => {
    images.forEach(image => {
        // Adicionando imagens dinâmicamente dentro do container-items
        // Para cada imagem o container vai adicionar uma imagem nova, cada uma dentro de uma div.item.
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}">
            </div>
        `
    });
}

loadImages(images, containerItems)

// trocando ordem da lista
let items = document.querySelectorAll(".item")
// vou pegar a primeira imagem de items e mandar ela para o final
const previous = () => {
    containerItems.appendChild(items[0])
    // Recarrega a lista
    items = document.querySelectorAll(".item")
}

const next = () => {
    let lastItem = items[items.length - 1]
    // Vou pegar o último e colocar antes do primeiro item
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll(".item")
}

document.querySelector("#previous").addEventListener("click", previous)
document.querySelector("#next").addEventListener("click", next)