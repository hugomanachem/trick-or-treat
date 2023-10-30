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

        this.positionX = this.boardOriginX;
        this.positionY = this.boardOriginY;

        // dom manipulation to reflect initial values (size, position)
        this.playerElm = document.getElementById("player");
        this.updatePlayer();
    }

    updatePlayer() {
        this.playerElm.style.width = this.width + "px";
        this.playerElm.style.height = this.height + "px";
        this.playerElm.style.left = this.positionX + "px";
        this.playerElm.style.bottom = this.positionY + "px";
    }

    moveLeft() {
        this.positionX -= this.speed;
    }

    moveRight() {
        this.positionX += this.speed;
    }

    moveUp() {
        this.positionY += this.speed;
    }

    moveDown() {
        this.positionY -= this.speed;
    }
}