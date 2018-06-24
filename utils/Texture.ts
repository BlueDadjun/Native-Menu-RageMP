class TextureDictionnary {
	private textureDictionnary: string;
	private textures: string[];

	public constructor(textureDict: string, textures: string[]) {
		this.textureDictionnary = textureDict;
		this.textures = textures;
	}

	public draw(textureName: string, screenX: number, screenY: number, scaleX: number, scaleY: number, color: Color = new Color(255, 255, 255), heading: number = 0): void {
		if (this.textures.indexOf(textureName) !== -1) {
			if (mp.game.graphics.hasStreamedTextureDictLoaded(this.textureDictionnary) == false) {
				mp.game.graphics.requestStreamedTextureDict(this.textureDictionnary, true);
			}

			mp.game.graphics.drawSprite(this.textureDictionnary, textureName, screenX, screenY, scaleX, scaleY, heading, color.red, color.green, color.blue, color.alpha);
		}
	}
}