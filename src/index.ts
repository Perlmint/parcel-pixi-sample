import app from "./app";
import Player from "./player";
import world from "./world";

const player = new Player();
player.x = app.screen.width * 0.2;
world.addChild(player);

// bind jump to user input
document.onkeypress = e => {
    switch (e.key) {
        case " ":
            player.jump();
            break;
    }
};
app.stage.on("pointertap", player.jump, player);
