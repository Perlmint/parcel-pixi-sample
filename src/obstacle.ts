import GameObject from "./object";
import { generateTextTexture } from "./util";

const obstacleTexture = generateTextTexture("ㅗ", {
    fill: "red", fontSize: 20, fontWeight: "bold",
});

const OBSTACLE_SPEED = -4;

export default class Obstacle extends GameObject {
    public constructor() {
        super(obstacleTexture);
        this.velocity.x = OBSTACLE_SPEED;
    }
}