class Item {
    constructor() {
        this.itemElm = document.getElementById("item");

        this.width = 50;
        this.height = 50;

        this.positionXGrid = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
        this.positionYGrid = Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
    }  
}