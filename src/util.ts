import app from "./app";

// generate texture from text & style
// cheap resource
export function generateTextTexture(text: string, style: PIXI.TextStyleOptions) {
    const label = new PIXI.Text(text, style);
    const { width, height } = label;
    const baseTexture = new PIXI.BaseRenderTexture(width, height);
    const renderTexture = new PIXI.RenderTexture(baseTexture);
    app.renderer.render(label, renderTexture);
    label.destroy();

    return renderTexture;
}