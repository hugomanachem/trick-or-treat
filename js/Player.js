class Player {
    constructor() {
        // initialize properties
        this.width = 5;
        this.height = 10;
        this.positionX = 10;
        this.positionY = 10;
        this.speed = 5;
        this.item = item;

        // dom manipulation to reflect initial values (size, position)
        this.playerElm = document.getElementById("player");
        this.updatePlayer();
    }

    updatePlayer() {
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
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