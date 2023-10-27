class Player {
    constructor() {
        // initialize properties
        this.width = 4;
        this.height = 10;
        this.positionX = 12.5;
        this.positionY = 12.5;
        this.speed = 2;

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

    isWallCollision(direction) {
        switch (direction) {
            case "left":
                if (this.positionX < 12.5) {
                    console.log("Collision detected on the left");
                    return true;
                } else {
                    return false;
                };
                break;
            case "right":
                if (this.positionX + this.width > 87.5) {
                    console.log("Collision detected on the right");
                    return true;
                } else {
                    return false;
                }
                break;
            case "up":
                if (this.positionY + this.height > 87.5) {
                    console.log("Collision detected on the top");
                    return true;
                } else {
                    return false;
                }
                break;
            case "down":
                if (this.positionY < 12.5) {
                    console.log("Collision detected on the bottom");
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }

    isItemCollision() {
        if (this.positionX < item.positionX + item.width && this.positionX + this.width > item.positionX && this.positionY < item.positionY + item.height && this.positionY + this.height > item.positionY) {
            // Collision detected!
            return true;

        } else {
            return false;
        }
    }

    moveLeft() {
        this.positionX -= this.speed;
        if (this.isItemCollision()) {
            this.positionX = item.positionX + item.width;
            this.positionY = item.positionY;
            setTimeout(() => {
                this.updatePlayer();
            alert("You've collected an Item!");
            },200);
            
        }
        if (this.isWallCollision("left")) {
            this.positionX += this.speed;
        }
        this.updatePlayer();
    }

    moveRight() {
        this.positionX += this.speed;
        if (this.isItemCollision()) {
            this.positionX = item.positionX - this.width;
            this.positionY = item.positionY;
            setTimeout(() => {
                this.updatePlayer();
            alert("You've collected an Item!");
            },200);
        }
        if (this.isWallCollision("right")) {
            this.positionX -= this.speed;
        }
        this.updatePlayer();
    }

    moveUp() {
        this.positionY += this.speed;
        if (this.isItemCollision()) {
            this.positionX = item.positionX;
            this.positionY = item.positionY - this.height;
            setTimeout(() => {
                this.updatePlayer();
            alert("You've collected an Item!");
            },200);
            
        }
        if (this.isWallCollision("up")) {
            this.positionY -= this.speed; 
        }
        this.updatePlayer();
    }

    moveDown() {
        this.positionY -= this.speed;
        if (this.isItemCollision()) {
            this.positionX = item.positionX;
            this.positionY = item.positionY + item.height;
            setTimeout(() => {
                this.updatePlayer();
            alert("You've collected an Item!");
            },200);
        }
        if (this.isWallCollision("down")) {
            this.positionY += this.speed;
        }
        this.updatePlayer();
    }
}