class CloseMenuItem extends TextMenuItem {
	constructor(displayText: string = "Close") {
		super(displayText, null);

		this._textColor = new Color(255, 255, 255, 255);
		this._backgroundColor = new Color(242,67,67,204);
		this.hoverBackgroundColor = new Color(242,67,67,255);
		this.hoverTextColor = new Color(255,255,255,255);
	}
}