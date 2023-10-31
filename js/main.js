class Game {
    constructor() {
        this.boardElm = document.getElementById('board');
        this.boardOriginX = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetLeft;
        this.boardOriginY = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetTop;
        this.boardWidth = (Array(this.boardElm.attributes))[0][0].ownerElement.clientWidth;
        this.boardHeight = (Array(this.boardElm.attributes))[0][0].ownerElement.clientHeight;

        this.player = new Player();
        this.item = new Item();

        this.isMalus = false;

        this.ennemy1Arr = [];
        const newEnnemy1 = new Ennemy1();
        this.ennemy1Arr.push(newEnnemy1);

        this.scoreElm = document.getElementById('score');
        this.score = 0;
        this.scoreElm.innerText = this.score;

        this.timerElm = document.getElementById('timer');
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

    isEnnemy1Collision() {
        for (let i = 0; i < this.ennemy1Arr.length; i++) {
            if (this.player.positionX < this.ennemy1Arr[i].positionX + this.ennemy1Arr[i].width &&
                this.player.positionX + this.player.width > this.ennemy1Arr[i].positionX &&
                this.player.positionY < this.ennemy1Arr[i].positionY + this.ennemy1Arr[i].height &&
                this.player.positionY + this.player.height > this.ennemy1Arr[i].positionY
            ) {
                return true;
    
            } else {
                
            }
        } 
    }

    collectItem() {
        this.player.positionX = this.item.positionX;
        this.player.positionY = this.item.positionY;
        this.player.updatePlayer();
        setTimeout(() => {
            this.player.updatePlayer();
            alert("You've collected an Item!");
        }, 10);
        this.score++;
        this.scoreElm.innerText = this.score;
    }

    generateNewLevel() {
        this.player.positionX = this.boardOriginX + ((Math.floor(Math.random() * (24 - 1 + 1)) + 1)*50) - this.player.width;
        this.player.positionY = this.boardOriginY + ((Math.floor(Math.random() * (12 - 1 + 1)) + 1)*50) - this.player.height;
        this.player.updatePlayer();
        
        console.log(this.ennemy1Arr);
        for(let i = 0; i < this.ennemy1Arr.length; i++) {
            do {
                this.ennemy1Arr[i].positionX = this.boardOriginX + ((Math.floor(Math.random() * (24 - 1 + 1)) + 1)*50) - this.ennemy1Arr[i].width;
                this.ennemy1Arr[i].positionY = this.boardOriginY + ((Math.floor(Math.random() * (12 - 1 + 1)) + 1)*50) - this.ennemy1Arr[i].height;     
            } while (this.isEnnemy1Collision());
            this.ennemy1Arr[i].updateEnnemy1();
        }
        console.log(this.ennemy1Arr);
        while(this.ennemy1Arr.length < this.score * 2) {
            const newEnnemy1 = new Ennemy1();
            this.ennemy1Arr.push(newEnnemy1);
        }

        do {
            this.item.positionX = this.boardOriginX + ((Math.floor(Math.random() * (24 - 1 + 1)) + 1)*50) - this.item.width;
            this.item.positionY = this.boardOriginY + ((Math.floor(Math.random() * (12 - 1 + 1)) + 1)*50) - this.item.height;
        } while (this.isItemCollision());

         
       
        //this.isMalus = !this.isMalus;
        
        this.item.updateItem();

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
