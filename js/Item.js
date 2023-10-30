class Item {
    constructor() {
        // initialize properties
        this.width = 25;
        this.height = 25;

        this.boardElm = document.getElementById('board');
        this.boardOriginX = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetLeft;
        this.boardOriginY = (Array(this.boardElm.attributes))[0][0].ownerElement.offsetTop;
        this.boardWidth = (Array(this.boardElm.attributes))[0][0].ownerElement.clientWidth;
        this.boardHeight = (Array(this.boardElm.attributes))[0][0].ownerElement.clientHeight;

        this.positionX = this.boardOriginX + this.boardWidth / 2;
        this.positionY = this.boardOriginY + this.boardHeight / 2;

        // dom manipulation to reflect initial values (size, position)
        this.itemElm = document.getElementById("item");
        this.updateItem();


    }

    updateItem() {
        this.itemElm.style.width = this.width + "px";
        this.itemElm.style.height = this.height + "px";
        this.itemElm.style.left = this.positionX + "px";
        this.itemElm.style.bottom = this.positionY + "px";
    }
}