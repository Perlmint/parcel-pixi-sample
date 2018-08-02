import app from "./app";
import { GRAVITY } from "./const";
import { generateTextTexture } from "./util";
import GameObject from "./object";

const playerTexture = generateTextTexture("옷", {
    fill: 0xffffff, fontSize: 30, fontWeight: "bold",
});

export default class Player extends GameObject {
    public constructor() {
        super(playerTexture);
    }

    public jump() {
        if (this.y === 0) {
            this.velocity.y = -10;
        }
    }
}
