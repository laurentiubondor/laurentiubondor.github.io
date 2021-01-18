var baseUrl = new URL("https://games-world.herokuapp.com/games");


var lista = document.createElement("li");

function Joc() { }


Joc.prototype.dysplayGames = function (newJoc) {
    var games = document.getElementById("games");


    //var lista = document.createElement("li");

    var titlu = document.createElement("h3");

    var descriere = document.createElement("h5");

    img = document.createElement("img");

    img.setAttribute("src", newJoc.imageUrl);

    titlu.innerHTML = newJoc.title;
    descriere.innerHTML = newJoc.description;

    games.appendChild(lista);
    lista.appendChild(titlu);
    lista.appendChild(img);
    lista.appendChild(descriere);
}



function getGames() {

    fetch(baseUrl.href, { method: "GET" })

        .then(
            function (response) {

                return response.json();
            }
        )
        .then(function (jsonResp) {

            var newJoc = Object.assign(new Joc(), jsonResp);
            console.log(newJoc)

            for (var i = 0; i < jsonResp.length; i++) {

                newJoc.dysplayGames(newJoc[i])

                var buton = createDeleteButton()
                lista.appendChild(buton)

                buton.addEventListener('click', function () {
                    deleteGames(newJoc[i])


                })
            }
        })
        .catch(function () { displayError("Something went wrong! Try again!"); })
        .finally(hideLoader);

};


getGames()
displayLoader()



function displayError(errorMessage) {
    var errorDiv = document.getElementById('errorDiv');
    errorDiv.innerText = errorMessage
}


function displayLoader() {

    var loader = document.getElementsByClassName("loader")[0];
    loader.style.display = "block";
}

function hideLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.style.display = "none";
}


function deleteGames(id) {
    fetch((`https://games-world.herokuapp.com/games/${id}`), {
        method: 'DELETE'
    }).then(function (response) {
        return response.json();
    })

}



function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.style.border = "1px solid green"

    return deleteButton;

}