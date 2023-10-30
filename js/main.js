class Game {
    constructor() {
        this.boardElm = document.getElementById('board');
        this.boardOriginX = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetLeft;
        this.boardOriginY = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetTop;
        this.boardWidth = (Array(this.boardElm.attributes))[0][0].ownerElement.clientWidth;
        this.boardHeight = (Array(this.boardElm.attributes))[0][0].ownerElement.clientHeight;

        this.timerElm = document.getElementById('timer');
        console.log(this.timerElm)

        const player = new Player();
        this.player = player;
        const item = new Item();
        this.item = item;
        this.isMalus = false;

        this.time = 0;
        this.setTimer();
    }

    checkWallCollision() {
        if (this.player.positionX < this.boardOriginX) {
            this.player.positionX = this.boardOriginX;
            this.player.updatePlayer();
            console.log("Collision detected on the left");
        } else if (this.player.positionX + this.player.width > this.boardOriginX + this.boardWidth) {
            this.player.positionX = this.boardOriginX + this.boardWidth - this.player.width;
            this.player.updatePlayer();
            console.log("Collision detected on the right");
        } else if (this.player.positionY + this.player.height > this.boardOriginY + this.boardHeight) {
            this.player.positionY = this.boardOriginY + this.boardHeight - this.player.height;
            this.player.updatePlayer();
            console.log("Collision detected on the top");
        } else if (this.player.positionY < this.boardOriginY) {
            this.player.positionY = this.boardOriginY;
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
        this.player.positionX = Math.random() * ((this.boardOriginX + this.boardWidth - this.player.width) - this.boardOriginX) + this.boardOriginX;
        this.player.positionY = Math.random() * (this.boardOriginY + this.boardHeight - this.player.height - this.boardHeight) + this.boardHeight;

        do {
            this.player.positionX = Math.random() * ((this.boardOriginX + this.boardWidth - this.player.width) - this.boardOriginX) + this.boardOriginX;
            this.player.positionY = Math.random() * (this.boardOriginY + this.boardHeight - this.player.height - this.boardHeight) + this.boardHeight;
        } while (this.isItemCollision());

        this.isMalus = !this.isMalus;
        this.player.updatePlayer();
        this.item.updateItem();

    }

    setTimer() {
        this.time = 10;
        let timerId = setInterval(() => {
            if (this.time >= 0) {
                this.timerElm.innerText = this.time;
                console.log(this.timerElm.innerHTML)
                this.time--;
            } else {
            }
        }, 1000);
    }

}


//game initialisation
const game = new Game();

document.addEventListener("keydown", (e) => {
    if (game.isMalus) {
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
