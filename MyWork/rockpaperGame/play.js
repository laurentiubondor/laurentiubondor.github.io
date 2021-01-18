var options = ["rock",
    "paper",
    "scissors"
];




function alegeCastigator(user, computer) {

    for (
        var i = 0; i < 3; i++)

        if (user === computer)
            return "egaliatate"

        else if (user === options[1] && computer === options[0])
            return "user";


        else if (user === options[0] && computer === options[2])
            return "user";


        else if (user === options[2] && computer === options[0])
            return "computer";


        else if (user === options[0] && computer === options[1])
            return "computer";


        else if (user === options[1] && computer === options[2])
            return "computer";

        else (user === options[2] && computer === options[1])
    return "computer";




};


function alegeOptiunea() {
    return options[Math.floor(Math.random() * 3)];


};

function play() {
    var user = alegeOptiunea()

    console.log('user alege ' + user);

    var computer = alegeOptiunea()
    console.log('computer alege ' + computer);

    var winner = alegeCastigator(user, computer);
    console.log('a castigat ' + winner);

}

play();
console.log('da refresh la pagina pentru a juca din nou');