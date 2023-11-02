class Player {
    constructor() {
        this.playerElm = document.getElementById("player");
        
        this.width = 50;
        this.height = 50;

        this.speed = 50;

        this.positionXGrid = Math.floor(Math.random() * (23 - 1 + 1)) + 1;
        this.positionYGrid = Math.floor(Math.random() * (11 - 1 + 1)) + 1;  
    }

    moveLeft(isMalus) {
        this.positionXGrid--;
        if(isMalus) {
            this.playerElm.id = "player-left-malus";
        } else {
            this.playerElm.id = "player-left";
        }
    }

    moveRight(isMalus) {
        this.positionXGrid++;
        if(isMalus){
            this.playerElm.id = "player-right-malus";
        } else {
            this.playerElm.id = "player-right";
        }
        
    }

    moveUp(isMalus) {
        this.positionYGrid ++;
    }

    moveDown(isMalus) {
        this.positionYGrid --;
    }
}