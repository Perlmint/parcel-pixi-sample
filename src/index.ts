import app from "./app";
import player from "./player";
import world from "./world";

player.x = app.screen.width * 0.2;
world.addChild(player);

import "./map";