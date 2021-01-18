const BASEURL = "https://type.fit/api/quotes"


async function getQuote() {
    const response = await fetch(BASEURL, {
        method: "GET"
    })

    return response.json();
}



async function getMoviePost() {
    try {
        const quote = await getQuote();
        console.log(quote)


        /*     GET RANDOM QUOTE
        
               var quotes =quote[Math.floor(Math.random() *quote.length)];
               console.log(quotes)
               console.log(quotes.text)
               console.log(quotes.author)*/



        var day = new Date().getDay();
        let quoteOfTheDay = quote[day % quote.length];
        console.log(quoteOfTheDay)
        //nothinghapens...
        const text = document.getElementById("text")
        const author = document.getElementById("author")
        text.innerHTML = `"${quoteOfTheDay.text}"`
        author.innerHTML = `"Author:    "${quoteOfTheDay.author}`

    } catch (e) {
        console.log(e);
    }




}

getMoviePost()
