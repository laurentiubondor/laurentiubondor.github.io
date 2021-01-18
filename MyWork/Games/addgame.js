const postGameButton = document.querySelector('#postGameButton');
postGameButton.addEventListener('click', createGame);

function createGame() {
    console.log('start create post')

    const game = getGame()

    console.log(game)

    saveGameOnServer(game)
        .then(function (response) {
            console.log(response)
        }).catch(function (err) {
            console.log(err)
        })

}

function saveGameOnServer(game) {
    const promise = fetch("https://games-world.herokuapp.com/games", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    }).then(function (response) {
        return response.json()
    });

    return promise;
}

function getGame() {
    const description = document.querySelector('#description').value;
    const imageUrl = document.querySelector('#imageUrl').value;
    const title = document.querySelector('#title').value;



    return {
        description: description,
        imageUrl: imageUrl,
        title: title,

    }
}