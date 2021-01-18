async function displayGamesInHtml() {

    const container = document.querySelector('#posts')



    try {

        const posts = await ServerApi.getGames();
        console.log(posts);

        const postsObject = posts
            .map(post => new Games(post.title, post.imageUrl, post.description,))

        const postsDOM = postsObject.map(function (postObject) {

            return postObject.render()

        });

        postsDOM.forEach(postDOM => {

            container.appendChild(postDOM)

            var btn = document.createElement("button")
            btn.innerText = "delete"
            postDOM.appendChild(btn)
            btn.addEventListener("click", function () {


                const id = Games.id //         AICI NU MAI STIU CUM SA FAC !

                ServerApi.deleteGame(id).then(function (response) {



                })
            })
        })

    } catch (e) {
        console.log(e)
        container.innerHTML = "Server error"
    }

}

displayGamesInHtml();///