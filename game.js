const scenePortal = document.getElementById('scenePortal')
const sceneGame = document.getElementById('sceneGame')
const gameScore = document.getElementById('gameScore')

function gameStart () {
    scenePortal.style.display = 'none'
    sceneGame.style.display = 'block'
}

function increaseScore () {
    gameScore.innerText = (Number(gameScore.innerText) + 1)
}
