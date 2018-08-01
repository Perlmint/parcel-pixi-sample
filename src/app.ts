import "pixi.js";

const app = new PIXI.Application({
    autoStart: true,
    width: 1024,
    height: 768,
    view: document.body.getElementsByTagName("canvas")[0],
});

// allow firing event by touching anywhere
app.stage.hitArea = new PIXI.Rectangle(0, 0, app.screen.width, app.screen.height);
app.stage.interactive = app.stage.buttonMode = true;

export default app;