class Game {
    constructor() {
        this.boardElm = document.getElementById('board');
        this.boardOriginX = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetLeft;
        this.boardOriginY = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetTop;
        this.boardWidth = (Array(this.boardElm.attributes))[0][0].ownerElement.clientWidth;
        this.boardHeight = (Array(this.boardElm.attributes))[0][0].ownerElement.clientHeight;

        this.player = new Player();
        this.item = new Item();

        this.ennemy1Arr = [];
        this.ennemy1Arr.push(new Ennemy1());

        this.ennemy2Arr = [];
        this.ennemy2Arr.push(new Ennemy2());

        this.isMalus = false;

        this.scoreElm = document.getElementById('score');
        this.score = 0;
        this.scoreElm.innerText = this.score;

        this.timerElm = document.getElementById('timer');
        this.time = 0;
        this.setTimer();
    }

    checkWallCollision() {
        if (this.player.positionXGrid < 1) {
            this.player.positionXGrid++;
            this.player.updatePlayer();
            console.log("Collision detected on the left");
        } else if (this.player.positionXGrid > 24) {
            this.player.positionXGrid--;
            this.player.updatePlayer();
            console.log("Collision detected on the right");
        } else if (this.player.positionYGrid > 12) {
            this.player.positionYGrid--;
            this.player.updatePlayer();
            console.log("Collision detected on the top");
        } else if (this.player.positionYGrid < 1) {
            this.player.positionYGrid++;
            this.player.updatePlayer();
            console.log("Collision detected on the bottom");
        }
    }

    isItemCollision() {
        if (this.player.positionXGrid === this.item.positionXGrid &&
            this.player.positionYGrid === this.item.positionYGrid
        ) {
            return true;

        } else {
            return false;
        }
    }

    isEnnemy1Collision() {
        for (let i = 0; i < this.ennemy1Arr.length; i++) {
            if (this.player.positionXGrid === this.ennemy1Arr[i].positionXGrid &&
                this.player.positionYGrid === this.ennemy1Arr[i].positionYGrid
            ) {
                return true;
            } else {

            }
        }
    }

    collectItem() {
        setTimeout(() => {
            alert("You've collected an Item!");
        }, 10);
        this.score++;
        this.scoreElm.innerText = this.score;
    }

    generateNewLevel() {
        this.player.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
        this.player.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        this.player.updatePlayer();

        do {
            this.item.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
            this.item.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        } while (this.isItemCollision());
        this.item.updateItem();

        
        for (let i = 0; i < this.ennemy1Arr.length; i++) {
            do {
                this.ennemy1Arr[i].positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
                this.ennemy1Arr[i].positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            } while (this.isEnnemy1Collision());
            this.ennemy1Arr[i].updateEnnemy1();
        }

        this.ennemy1Arr.push(new Ennemy1());
        
        for (let i = 0; i < this.ennemy2Arr.length; i++) {
            clearInterval(this.ennemy2Arr[i].movementIntervalId);
            this.ennemy2Arr[i].initializeMovement();
        }

        if (this.ennemy2Arr.length * 2 < this.score) {
            this.ennemy2Arr.push(new Ennemy2());
        }
        
        //this.isMalus = !this.isMalus;
    }

    setTimer() {
        this.time = 100;
        let timerId = setInterval(() => {
            if (this.time >= 0) {
                this.timerElm.innerText = this.time;
                this.time--;
            } else {
                location.href = "scorePage.html";
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
                if (game.isEnnemy1Collision()) {
                    location.href = "scorePage.html";

                } else if (game.isItemCollision()) {
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
