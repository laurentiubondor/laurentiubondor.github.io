//Dcf3VghPrX91lmFkLSsXMnMNfaG7zIg0MMRT4yv8

var baseUrl = new URL('https://api.nasa.gov/planetary/apod?api_key=Dcf3VghPrX91lmFkLSsXMnMNfaG7zIg0MMRT4yv8');
var obiect;


getData()


function getData() {

    displayLoader()
    seDate()
    hideError()

    fetch(baseUrl.href, {
        method: "GET"
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (jsonResp) {
            console.log(jsonResp)
            obiect = jsonResp;

            if (jsonResp.code === 400) {
                error()
            } else
                displayElements(obiect);
        })
        .catch(function () {
            error()
        })
        .finally(function () {
            hideLoader()
        });
}



function displayElements(obiect) {

    var titlu = document.getElementById("titlu")
    var poza = document.getElementById('urlImg')
    poza.setAttribute("src", obiect.url);
    titlu.innerHTML = obiect.title
}

function seDate() {
    var adaugaData = document.getElementById('inp').value

    if (adaugaData) {
        baseUrl.searchParams.set("date", adaugaData)

    }
}

function displayLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.style.display = "block";
}

function hideLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.style.display = "none";
}

function error(error) {
    var error = document.getElementById("error")
    error.style.display = "block";
}

function hideError(error) {
    var error = document.getElementById("error")


    error.style.display = "none";
}

document.getElementById("activity-button").addEventListener("click", getData);