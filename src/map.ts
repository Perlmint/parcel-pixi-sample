import app from "./app";
import world from "./world";

const patterns = [
    [0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 0,]
];

function createObstacle() {
    const sprite = new PIXI.Text("ㅗ", {
        fill: "red", fontSize: 20, fontWeight: "bold",
    });
    sprite.anchor.set(0.5, 1);
    world.addChild(sprite);

    return sprite;
}

const OBSTACLE_WIDTH = 2;
const OBSTACLE_SPEED = -4;

const obstacles: PIXI.Sprite[] = [];

app.ticker.add(dt => {
    let removeCount = 0;
    const move_delta = OBSTACLE_SPEED * dt;
    for (const obstacle of obstacles) {
        obstacle.x += move_delta;

        if (obstacle.x < OBSTACLE_WIDTH) {
            removeCount++;
            world.removeChild(obstacle);
        }
    }

    obstacles.splice(0, removeCount);
});

let remainNextGen = 0;

app.ticker.add(dt => {
    remainNextGen -= dt;
    if (remainNextGen < 0) {
        const pattern = patterns[Math.floor(Math.random() * (patterns.length - 1))];
        let x = 0;
        for (const p of pattern) {
            if (p === 1) {
                const obstacle = createObstacle();
                obstacle.x = app.screen.width + 100 + x;
                obstacles.push(obstacle);
            }
            x += OBSTACLE_WIDTH;
        }
        remainNextGen = pattern.length * 4;
    }
});