// Ide írd az elemekre hivatkozást, az eseménykezelő hozzárendelését
// és a saját függvényedet!
const nev = document.querySelector('#nev')
const gomb = document.querySelector('#gomb')
const jatekosnev = document.querySelector('#jatekosnev')

//console.log(nev, gomb, jatekosnev)

gomb.addEventListener('click', showName)

function showName() {
    jatekosnev.textContent = nev.value
}