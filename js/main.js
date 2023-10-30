class Game {
    constructor() {
        const player = new Player();
        this.player = player;
        const item = new Item();
        this.item = item;
        this.isMalus = false;
    }

    checkWallCollision() {
        if (this.player.positionX < 10) {
            this.player.positionX = 10;
            this.player.updatePlayer();
            console.log("Collision detected on the left");
        } else if (this.player.positionX + this.player.width > 90) {
            this.player.positionX = 90 - this.player.width;
            this.player.updatePlayer();
            console.log("Collision detected on the right");
        } else if (this.player.positionY + this.player.height > 90) {
            this.player.positionY = 90 - this.player.height;
            this.player.updatePlayer();
            console.log("Collision detected on the top");
        } else if (this.player.positionY < 10) {
            this.player.positionY = 10;
            this.player.updatePlayer();
            console.log("Collision detected on the bottom");
        }
    }

    isItemCollision() {
        if (this.player.positionX < this.item.positionX + this.item.width &&
            this.player.positionX + this.player.width > this.item.positionX &&
            this.player.positionY < this.item.positionY + this.item.height &&
            this.player.positionY + this.player.height > this.item.positionY
        ) {
            return true;

        } else {
            return false;
        }
    }

    collectItem() {
        this.player.positionX = this.item.positionX;
        this.player.positionY = this.item.positionY;
        this.player.updatePlayer();
        setTimeout(() => {
            this.player.updatePlayer();
            alert("You've collected an Item!");
        }, 200);
    }

    generateNewLevel() {
        this.player.positionX = Math.random() * ((90 - this.player.width) - 10) + 10;
        this.player.positionY = Math.random() * (90 - this.player.height - 10) + 10;

        do {
            this.item.positionX = Math.random() * ((90 - this.player.width) - 10) + 10;
            this.item.positionY = Math.random() * (90 - this.player.height - 10) + 10;
        } while (this.isItemCollision());

        this.isMalus = !this.isMalus;
        this.player.updatePlayer();
        this.item.updateItem();

    }

}


//game initialisation
const game = new Game();
let boardElm = document.getElementById("board");
console.log(Array(boardElm.attributes)[0][0].ownerElement)

document.addEventListener("keydown", (e) => {
    if(game.isMalus) {
        switch (e.code) {
            case "ArrowLeft":
                game.player.moveRight();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
    
                }
                game.player.updatePlayer();
                break;
            case "ArrowRight":
                game.player.moveLeft();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
                }
                game.player.updatePlayer();
                break;
            case "ArrowUp":
                game.player.moveDown();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
                }
                game.player.updatePlayer();
                break;
            case "ArrowDown":
                game.player.moveUp();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
                }
                game.player.updatePlayer();
                break;
        }
    } else {
        switch (e.code) {
            case "ArrowLeft":
                game.player.moveLeft();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
    
                }
                game.player.updatePlayer();
                break;
            case "ArrowRight":
                game.player.moveRight();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
                }
                game.player.updatePlayer();
                break;
            case "ArrowUp":
                game.player.moveUp();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
                }
                game.player.updatePlayer();
                break;
            case "ArrowDown":
                game.player.moveDown();
                game.checkWallCollision();
                if (game.isItemCollision()) {
                    game.collectItem();
                    setTimeout(() => {
                        game.generateNewLevel();
                    }, 200);
                }
                game.player.updatePlayer();
                break;
        }
    }
    
});
