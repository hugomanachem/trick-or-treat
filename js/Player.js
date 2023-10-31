class Player {
    constructor() {
        this.playerElm = document.getElementById("player");
        
        this.width = 50;
        this.height = 50;

        this.speed = 50;

        this.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
        this.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
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