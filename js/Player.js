class Player {
    constructor() {
        // initialize properties
        this.width = 50;
        this.height = 50;
        this.speed = 50;

        this.boardElm = document.getElementById('board');
        this.boardOriginX = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetLeft;
        this.boardOriginY = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetTop;
        this.boardWidth = (Array(this.boardElm.attributes))[0][0].ownerElement.clientWidth;
        this.boardHeight = (Array(this.boardElm.attributes))[0][0].ownerElement.clientHeight;

        this.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
        this.positionX = this.boardOriginX + ((this.positionXGrid)*50) - this.width;
        this.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        this.positionY = this.boardOriginY + ((this.positionYGrid)*50) - this.height;

        // dom manipulation to reflect initial values (size, position)
        this.playerElm = document.getElementById("player");
        this.updatePlayer();
    }

    updatePlayer() {
        this.positionX = this.boardOriginX + ((this.positionXGrid)*50) - this.width;
        this.positionY = this.boardOriginY + ((this.positionYGrid)*50) - this.height;

        this.playerElm.style.width = this.width + "px";
        this.playerElm.style.height = this.height + "px";
        this.playerElm.style.left = this.positionX + "px";
        this.playerElm.style.bottom = this.positionY + "px";
    }

    moveLeft() {
        this.positionXGrid--;
    }

    moveRight() {
        this.positionXGrid++;
    }

    moveUp() {
        this.positionYGrid ++;
    }

    moveDown() {
        this.positionYGrid --;
    }
}