class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"})

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/Default.png"
        newsImage.alt = "Foto Da Noticia"

        cardRight.appendChild(newsImage);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
        .card {
            margin-top: 30px;
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: white;
            border-radius: 10px;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-weight: 400;
        }
        
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: #000;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p{
            color: rgb(70, 70, 70);
        }

        .card__right > img{
            width: 150px;
            margin-top: 2px;
            margin-right: 5px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 20px;
        }
        `


        return style
    }
}

customElements.define("card-news",CardNews)