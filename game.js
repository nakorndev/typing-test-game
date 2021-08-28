const words = [
    'Apple',
    'Banana',
    'Cherry'
]

const scenePortal = document.getElementById('scenePortal')
const sceneGame = document.getElementById('sceneGame')
const gameScore = document.getElementById('gameScore')
const typeWord = document.getElementById('typeWord')
const typeAnswer = document.getElementById('typeAnswer')

function gameStart () {
    scenePortal.style.display = 'none'
    sceneGame.style.display = 'block'
    createWord()
}

function increaseScore () {
    gameScore.innerText = (Number(gameScore.innerText) + 1)
}

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createWord () {
    const randomIndex = random(0, words.length - 1)
    typeWord.value = words[randomIndex]
}
