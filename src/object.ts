import { GRAVITY } from "./const";

export default class GameObject extends PIXI.Sprite {
    public readonly velocity = new PIXI.Point(0, 0);

    public constructor(texture: PIXI.Texture) {
        super(texture);

        this.anchor.y = 1;
    }

    public update(dt: number) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.velocity.y += GRAVITY;
    }
}