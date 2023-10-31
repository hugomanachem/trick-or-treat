class Ennemy1 {
    constructor() {
        // initialize properties
        this.width = 50;
        this.height = 50;

        this.boardElm = document.getElementById('board');
        this.boardOriginX = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetLeft;
        this.boardOriginY = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetTop;
        this.boardWidth = (Array(this.boardElm.attributes))[0][0].ownerElement.clientWidth;
        this.boardHeight = (Array(this.boardElm.attributes))[0][0].ownerElement.clientHeight;

        this.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
        this.positionX = this.boardOriginX + ((this.positionXGrid) * 50) - this.width;
        this.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        this.positionY = this.boardOriginY + ((this.positionYGrid) * 50) - this.height;

        // dom manipulation to reflect initial values (size, position)
        this.createDomElement();
    }

    updateEnnemy1() {
        this.positionX = this.boardOriginX + ((this.positionXGrid) * 50) - this.width;
        this.positionY = this.boardOriginY + ((this.positionYGrid) * 50) - this.height;

        this.ennemy1Elm.style.width = this.width + "px";
        this.ennemy1Elm.style.height = this.height + "px";
        this.ennemy1Elm.style.left = this.positionX + "px";
        this.ennemy1Elm.style.bottom = this.positionY + "px";
    }

    createDomElement() {
        // step1: create the element
        this.ennemy1Elm = document.createElement("div");

        // step2: add content or modify
        this.ennemy1Elm.classList.add("ennemy1");
        this.ennemy1Elm.style.width = this.width + "px";
        this.ennemy1Elm.style.height = this.height + "px";
        this.ennemy1Elm.style.left = this.positionX + "px";
        this.ennemy1Elm.style.bottom = this.positionY + "px";

        // step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.ennemy1Elm);
    }

}