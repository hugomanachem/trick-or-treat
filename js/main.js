class Player {
    constructor() {
        // initialize properties
        this.width = 10;
        this.height = 16;
        this.positionX = 0;
        this.positionY = 0;

        // dom manipulation to reflect initial values (size, position)
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }

    moveUp() {
        this.positionY++;
        this.playerElm.style.bottom = this.positionY + "vh";
    }
    moveDown() {
        this.positionY--;
        this.playerElm.style.bottom = this.positionY + "vh";
    }
}

const player = new Player();
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
        case "ArrowUp":
            player.moveUp();
            break;
        case "ArrowDown":
            console.log("arrow down detected");
            player.moveDown();
            break;
    }
});
