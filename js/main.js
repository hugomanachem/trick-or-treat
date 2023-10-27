//Level initialisation
const player = new Player();
const item = new Item();


document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
        case "ArrowUp":
            player.moveUp();
            break;
        case "ArrowDown":
            player.moveDown();
            break;
    }
});
