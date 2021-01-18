class ServerApi {



    static async getGames() {
        const response = await fetch(`https://games-world.herokuapp.com/games/`);
        return response.json()
    }



    static async deleteGame(id) {

        const response = await fetch(`https://games-world.herokuapp.com/games/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        })
        return response.json();
    }


}