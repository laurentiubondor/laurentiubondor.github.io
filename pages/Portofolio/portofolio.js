function getPictureNasa() {
    const nasaImg = document.getElementsByClassName("thumbnail")
    nasaImg[0].addEventListener("click", (_event) => { window.location.href = " ../../MyWork/Nasa/nasa.html" })
}
function HangmanGame() {
    const hangman = document.getElementsByClassName("thumbnail")
    hangman[1].addEventListener("click", (_event) => { window.location.href = "../../MyWork/hangman/index.html " })
}
function rockPaperScissorsGame() {
    const rockPaper = document.getElementsByClassName("thumbnail")
    rockPaper[2].addEventListener("click", (_event) => { window.location.href = " ../../MyWork/rockpaperGame/play.html" })
}
function movieList() {
    const fistaFimle = document.getElementsByClassName("thumbnail")
    fistaFimle[3].addEventListener("click", (_event) => { window.location.href = "../../MyWork/myIMDB/pages/home/home.html" })
}
function getQuoteOfTheDay() {
    const quote = document.getElementsByClassName("thumbnail")
    quote[4].addEventListener("click", (_event) => { window.location.href = " ../../MyWork/quote/quote.html" })
}
function gamesList() {
    const gameList = document.getElementsByClassName("thumbnail")
    gameList[5].addEventListener("click", (_event) => { window.location.href = " ../../MyWork//Games/gameoop.html" })
}

getPictureNasa()
HangmanGame()
rockPaperScissorsGame()
movieList()
getQuoteOfTheDay()
gamesList()