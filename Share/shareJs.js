const pictogrameLinkuri = document.getElementById("pictogrameLinkuri")



pictogrameLinkuri.innerHTML = ` <div class="row links-icons">
<div class="col-md-3 bloc-pictograme" >
  <i id="mata" class=" fas fa-atlas fa-6x pictograme"></i>
  <h3 id="textPictograme">Picture of the day</h3>
</div>
<div class="col-md-3 bloc-pictograme">
  <i class="fas fa-align-center fa-6x  pictograme"></i>
  <h3 id="textPictograme">Quote of the day</h3>
</div>
<div  class="col-md-3 bloc-pictograme">
  <i  class="fas fa-baseball-ball fa-6x pictograme"></i>
  <h3 id="textPictograme">Play a game</h3>
</div>
</div>
</div>`

const navbar = document.getElementsByClassName("navbar")
navbar[0].innerHTML = ` <a class="navbar-brand" href="../laurentiubondor.github.io/index.html"><i class=" fas fa-adjust fa-2x logo"></i></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="../laurentiubondor.github.io/index.html">Home</a> 
    </li>
    <li class="nav-item">
      <a class="nav-link"href="../Resume/resume.html">Resume</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../Portofolio/portofolio.html">Portofolio</a>
    </li>
  </ul>
</div>`
//../laurentiubondor.github.io/index.htmlcccc
const footer = document.getElementsByClassName("footer")

footer[0].innerHTML =

  `<div class="footer-top">
<i class="fa fa-facebook fa-2x icoane-facebook-linkedin-git"></i></a>
<i class="fa fa-linkedin fa-2x icoane-facebook-linkedin-git"></i></a>
<i class="fa fa-github fa-2x icoane-facebook-linkedin-git"></i></a>
</div>

<div class="footer-bottom">
<div id="adresa" class="adresa-tlefon-mail">
  <i class="fa fa-map-marker fa-2x"></i>
  <p id="textAdresa"><span>Str. Unirii Nr.14 Bl. B3 Ap.6 Dej, Jud. Cluj, Romania</p>
</div>
<div class="adresa-tlefon-mail">
  <i class="fa fa-phone fa-2x"></i>
  <p>(+4) 0748514716</p>
</div>
<div class="adresa-tlefon-mail">
  <i class="fa fa-envelope fa-2x"></i>
  <p><a href="mailto:laurentiu.bondor@gmail.com">laurentiu.bondor@gmail.com</a></p>
</div>
</div>
`

function getPictureFromNasa() {
  const pictureFromNasa = document.getElementsByClassName("fa-atlas")
  pictureFromNasa[0].addEventListener("click", (_event) => { window.location.href = " ../../MyWork/Nasa/nasa.html" })

}

function qouteOfTheDay() {
  const quote = document.getElementsByClassName("fa-align-center")
  quote[0].addEventListener("click", (_event) => { window.location.href = " ../../MyWork/quote/quote.html" })

}

function rockPapereScissorGame() {
  const playAGame = document.getElementsByClassName("fa-baseball-ball")
  playAGame[0].addEventListener("click", (_event) => { window.location.href = " ../../MyWork/rockpaperGame/play.html" })
}
function facebookContact() {
  const facebook = document.getElementsByClassName("fa-facebook")
  facebook[0].addEventListener("click", (_event) => { window.location.href = " https://www.facebook.com/laurentiu.bondor.16" })
}
function linkedinContact() {
  const linkedin = document.getElementsByClassName("fa-linkedin")
  linkedin[0].addEventListener("click", (_event) => { window.location.href = " https://www.linkedin.com/in/bondor-laurentiu-1605b81ab" })
}
function gitContact() {
  const gitHub = document.getElementsByClassName("fa-github")
  gitHub[0].addEventListener("click", (_event) => { window.location.href = "  https://github.com/laurentiubondor" })
}
function adressMap() {
  const adresa = document.getElementById("adresa")
  adresa.addEventListener("click", (_event) => { window.location.href = " https://www.google.ro/maps/@47.1336415,23.8875493,21z" })
}

adressMap()
gitContact()
linkedinContact()
facebookContact()
rockPapereScissorGame()
getPictureFromNasa()
qouteOfTheDay()



