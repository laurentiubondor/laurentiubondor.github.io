const postCreateButton = document.querySelector('#Button');
postCreateButton.addEventListener('click', createGame);


function createGame() {

    let post = getDataFromHtmlForm()


    let encodeFormData = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    console.log(encodeFormData(post))

    async function saveGame() {

        const response = await fetch("https://games-world.herokuapp.com/games", {
            method: 'POST',

            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

            body: encodeFormData(post)
        })
            .then(function (response) {
                return response.json()
            })

            .then(response => console.log(response))

            .catch(function (err) {
                console.log(err)
            })

    }
    saveGame()

}


function getDataFromHtmlForm() {

    const postTitle = document.querySelector('#postTitle').value;
    const postText = document.querySelector('#postDescription').value;


    return {

        title: postTitle,
        description: postText,

    }
}