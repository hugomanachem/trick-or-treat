class Item {
    constructor() {
        // initialize properties
        this.width = 2;
        this.height = 5;
        this.positionX = 50;
        this.positionY = 50;

        // dom manipulation to reflect initial values (size, position)
        this.itemElm = document.getElementById("item");
        this.updateItem();


    }

    updateItem() {
        this.itemElm.style.width = this.width + "vw";
        this.itemElm.style.height = this.height + "vh";
        this.itemElm.style.left = this.positionX + "vw";
        this.itemElm.style.bottom = this.positionY + "vh";
    }
}