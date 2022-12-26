const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const refresh = document.getElementById("refresh")
const lamp = document.getElementById("lamp")

function isLampBroken() {
    // Vamos analizar a string no src da lâmpada pra ver se ela está quebrada ou não e fazer as alterações
    return lamp.src.indexOf("quebrada") > 1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./images/ligada.jpg"
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./images/desligada.jpg"
    }
}

function brokenLamp() {
    lamp.src = "./images/quebrada.jpg"
    turnOn.style.display = "none"
    turnOff.style.display = "none"
    refresh.style.display = "block"
}

function refreshing() {
    lamp.src = "./images/desligada.jpg"
    turnOn.style.display = "block"
    turnOff.style.display = "block"
    refresh.style.display = "none"
}




turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click", lampOff)
refresh.addEventListener("click", refreshing)
lamp.addEventListener("dblclick", brokenLamp)