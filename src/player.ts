import app from "./app";
import { GRAVITY } from "./const";

const player = Object.assign(new PIXI.Text("옷", {
    fill: 0xffffff, fontSize: 30, fontWeight: "bold",
}), {
    vy: 0,
});
player.anchor.set(0.5, 1);

// simple physics - jump & fall
app.ticker.add(dt => {
    player.y -= player.vy * dt;
    if (player.y > 0) {
        player.y = 0;
    }
    player.vy -= GRAVITY * dt;
});

function jump() {
    if (player.y === 0) {
        player.vy = 10;
    }
}

document.onkeypress = e => {
    switch (e.key) {
        case " ":
            jump();
            break;
    }
};

app.stage.on("pointertap", jump);

export default player;