class Games {
    constructor(title, imageUrl, description,) {
        this.title = title
        this.imageUrl = imageUrl
        this.description = description

    }

    render() {

        const postDOM = document.createElement('div');
        postDOM.style.border = "2px solid black"
        postDOM.style.margin = "10px";
        postDOM.style.padding = "10px";

        postDOM.innerHTML =
            `
      <h3>${this.title}</h3>
      <img src ="${this.imageUrl}"><img>
      <h5>${this.description}<h5>  
       `

        return postDOM;
    }

}