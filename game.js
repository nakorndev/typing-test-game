const words = [
    'Apple',
    'Banana',
    'Cherry'
]

let duration = 10

const scenePortal = document.getElementById('scenePortal')
const sceneGame = document.getElementById('sceneGame')
const gameScore = document.getElementById('gameScore')
const typeWord = document.getElementById('typeWord')
const typeAnswer = document.getElementById('typeAnswer')
const gameDuration = document.getElementById('gameDuration')

function gameStart () {
    scenePortal.style.display = 'none'
    sceneGame.style.display = 'block'
    createWord()
    startCountDuration()
}

function startCountDuration () {
    gameDuration.innerText = duration
    const durationInterval = setInterval(() => {
        gameDuration.innerText = duration--
        if (duration < 0) {
            clearInterval(durationInterval)
        }
    }, 1000)
}

function increaseScore () {
    gameScore.innerText = (Number(gameScore.innerText) + 1)
    createWord()
}

function decreaseScore () {
    gameScore.innerText = (Number(gameScore.innerText) - 1)
    createWord()
}

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createWord () {
    const randomIndex = random(0, words.length - 1)
    typeWord.value = words[randomIndex]
}

function resetAnswer () {
    typeAnswer.value = ''
}

function submitAnswer (event) {
    event.preventDefault()
    if (typeWord.value == typeAnswer.value) {
        increaseScore()
    } else {
        decreaseScore()
    }
    resetAnswer()
}
