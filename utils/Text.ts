function drawText(text: string, position: number[] = [], color: Color, font: number = 0, scale: number[] = [0.35, 0.35], isTextCenter: boolean = false): void {
	mp.game.ui.setTextFont(font);
	mp.game.ui.setTextScale(scale[0] * MainMenu.SCREEN_RATIO_WIDTH, scale[1] * MainMenu.SCREEN_RATIO_HEIGHT);
	mp.game.ui.setTextColour(color.red, color.green, color.blue, color.alpha);
	mp.game.ui.setTextCentre(isTextCenter);
	mp.game.ui.setTextEntry("STRING");
	mp.game.ui.addTextComponentSubstringPlayerName(text);
	mp.game.ui.drawText(position[0], position[1]);
}

function getTextWidth(text: string, font: number = 0, scale: number[] = [0.35, 0.35]): number {
	mp.game.ui.setTextFont(font);
	mp.game.ui.setTextScale(scale[0], scale[1]);
	mp.game.ui.setTextEntryForWidth("STRING");
	mp.game.ui.addTextComponentSubstringPlayerName(text);

	return mp.game.ui.getTextScreenWidth(true);
}