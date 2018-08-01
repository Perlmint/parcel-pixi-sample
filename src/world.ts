import app from "./app";

const world = app.stage.addChild(new PIXI.Container());
world.y = app.screen.height;

export default world;