class Ennemy2 {
    constructor() {
        // initialize properties
        this.width = 50;
        this.height = 50;
        this.movementIntervalId = null;

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
        this.initializeMovement();
    }

    initializeMovement() {
        let chosenValue = Math.random() < 0.5 ? "horizontal" : "vertical";
        if (chosenValue === "horizontal") {
            this.positionXGrid = 1;
            this.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            this.updateEnnemy2();
            let isFollowingXAxis = true;
            this.movementIntervalId = setInterval(() => {
                if (isFollowingXAxis) {
                    if (this.positionXGrid < 24) {
                        this.positionXGrid++;
                        this.updateEnnemy2();
                    } else if (this.positionXGrid === 24) {
                        isFollowingXAxis = !isFollowingXAxis;
                    }

                } else {
                    if (this.positionXGrid > 1) {
                        this.positionXGrid--;
                        this.updateEnnemy2();
                    } else if (this.positionXGrid === 1) {
                        isFollowingXAxis = !isFollowingXAxis;
                    }
                }
                this.isCollisionWithPlayer();
            }, 1000)
        } else {
            this.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
            this.positionYGrid = 12;
            this.updateEnnemy2();
            let isFollowingYAxis = true;
            this.movementIntervalId = setInterval(() => {
                if (isFollowingYAxis) {
                    if (this.positionYGrid > 1) {
                        this.positionYGrid--;
                        this.updateEnnemy2();
                    } else if (this.positionYGrid === 1) {
                        isFollowingYAxis = !isFollowingYAxis;
                    }

                } else {
                    if (this.positionYGrid < 12) {
                        this.positionYGrid++;
                        this.updateEnnemy2();
                    } else if (this.positionYGrid === 12) {
                        isFollowingYAxis = !isFollowingYAxis;
                    }
                }
                this.isCollisionWithPlayer();
            }, 1000)
        }
    }

    updateEnnemy2() {
        this.positionX = this.boardOriginX + ((this.positionXGrid) * 50) - this.width;
        this.positionY = this.boardOriginY + ((this.positionYGrid) * 50) - this.height;

        this.ennemy2Elm.style.width = this.width + "px";
        this.ennemy2Elm.style.height = this.height + "px";
        this.ennemy2Elm.style.left = this.positionX + "px";
        this.ennemy2Elm.style.bottom = this.positionY + "px";
    }

    isCollisionWithPlayer() {
        if (game.player.positionXGrid === this.positionXGrid &&
            game.player.positionYGrid === this.positionYGrid
        ) {
            location.href = "scorePage.html";
        } else {

        }
    }

    createDomElement() {
        // step1: create the element
        this.ennemy2Elm = document.createElement("div");

        // step2: add content or modify
        this.ennemy2Elm.classList.add("ennemy2");
        this.ennemy2Elm.style.width = this.width + "px";
        this.ennemy2Elm.style.height = this.height + "px";
        this.ennemy2Elm.style.left = this.positionX + "px";
        this.ennemy2Elm.style.bottom = this.positionY + "px";

        // step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.ennemy2Elm);
    }

}