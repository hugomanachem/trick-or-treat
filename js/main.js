class Player {
    constructor() {
        // initialize properties
        this.width = 3;
        this.height = 10;
        this.positionX = 12.5;
        this.positionY = 12.5;

        // dom manipulation to reflect initial values (size, position)
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
    }
    moveLeft() {
        this.positionX--;
        if(this.positionX < 12.5) {
            console.log("Collision detected on the left");
            this.positionX++;
        }
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        if(this.positionX + this.width > 87.5) {
            console.log("Collision detected on the right");
            this.positionX--;
        }
        this.playerElm.style.left = this.positionX + "vw";
    }

    moveUp() {
        this.positionY++;
        if(this.positionY + this.height > 87.5) {
            console.log("Collision detected on the top");
            this.positionY--;
        }
        this.playerElm.style.bottom = this.positionY + "vh";
    }
    moveDown() {
        this.positionY--;
        if(this.positionY < 12.5) {
            console.log("Collision detected on the bottom");
            this.positionY++;
        }
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
            player.moveDown();
            break;
    }
});
