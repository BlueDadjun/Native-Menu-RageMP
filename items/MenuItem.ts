abstract class MenuItem {
	public displayText: string;
	public data: any;

	protected _active: boolean;
	protected onClickEvents: OnClickItemMenuEvent[];
	protected onSelectEvents: OnSelectItemMenuEvent[];

	private readonly badge: MenuBadge;
	private readonly caption: string;

	protected _textColor: Color;
	protected _backgroundColor: Color;
	protected hoverTextColor: Color;
	protected hoverBackgroundColor: Color;

	public constructor(displayText: string, data: any, caption: string = "", badge: MenuBadge = NaN, textColor: Color = new Color(255, 255, 255, 240), backgroundColor: Color = new Color(0, 0, 0, 120), hoverTextColor: Color = new Color(0, 0, 0, 240), hoverBackgroundColor: Color = new Color(255, 255, 255, 170)) {
		this.displayText = displayText;
		this.data = data;

		this.caption = caption;
		this.badge = badge;

		this._textColor = textColor;
		this._backgroundColor = backgroundColor;
		this.hoverTextColor = hoverTextColor;
		this.hoverBackgroundColor = hoverBackgroundColor;

		this._active = false;
		this.onClickEvents = [];
		this.onSelectEvents = [];
	}

	public set active(value: boolean) {
		this._active = value;

		if (this._active && !(this instanceof CloseMenuItem)) {
			this.onSelectEvents.forEach(event => {
				event.trigger(this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
			});

			let currentMenuInstance = MainMenu.MenuInstances[MainMenu.MenuInstances.length - 1];
			if (currentMenuInstance.onEventMenu != null && typeof currentMenuInstance.onEventMenu.select !== "undefined") {
				currentMenuInstance.onEventMenu.select(this, this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
			}
		}
	}

	protected get textColor(): Color {
		return this._active ? this.hoverTextColor : this._textColor;
	}

	protected get backgroundColor(): Color {
		return this._active ? this.hoverBackgroundColor : this._backgroundColor;
	}

	public addOnClickEvent(onClickEvent: OnClickItemMenuEvent): void {
		this.onClickEvents.push(onClickEvent);
	}

	public addOnSelectEvent(onSelectEvent: OnSelectItemMenuEvent): void {
		this.onSelectEvents.push(onSelectEvent);
	}

	public render(x: number, y: number, yCaption: number): void {
		this.draw(x, y, yCaption);

		if (this._active && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
			if (mp.game.controls.isControlJustReleased(0, Control.INPUT_FRONTEND_ACCEPT)) {
				SOUND_SELECT.playSound();
				this.onClickEvents.forEach(event => {
					event.trigger(this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
				});

				if (!(this instanceof CloseMenuItem)) {
					let currentMenuInstance = MainMenu.MenuInstances[MainMenu.MenuInstances.length - 1];
					if (currentMenuInstance.onEventMenu != null && typeof currentMenuInstance.onEventMenu.click !== "undefined") {
						currentMenuInstance.onEventMenu.click(this, this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
					}
				}

				MainMenu.LAST_TICK_TIME = Date.now();
			}
		}
	}

	protected draw(x: number, y: number, yCaption: number): void {
		/* draw background */
		mp.game.graphics.drawRect(x, y + MainMenu.MENU_DRAW_OFFSET_Y, MainMenu.MENU_WIDTH, MainMenu.MENU_HEIGHT, this.backgroundColor.red, this.backgroundColor.green, this.backgroundColor.blue, this.backgroundColor.alpha);

		let xOffset = x - MainMenu.MENU_DRAW_OFFSET_X + (0.004 * MainMenu.SCREEN_RATIO_WIDTH);

		/* set badge */
		if (!isNaN(this.badge)) {
			CommonMenuTexture.draw(MenuBadgeToSpriteName(this.badge, this._active), x - MainMenu.MENU_DRAW_OFFSET_X + (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(160, 160, 160), 0);
			xOffset += (0.023 * MainMenu.SCREEN_RATIO_WIDTH);
		}

		/* display text */
		drawText(this.displayText, [xOffset, y + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT)], this.textColor);

		/* display caption */
		if (this._active && this.caption.length > 0) {
			let numberOfLine = Math.ceil(getTextWidth(this.caption) / MainMenu.MENU_WIDTH);
			let textLengthPerLine = this.caption.length / numberOfLine;
			let textureHeight = MainMenu.MENU_HEIGHT * numberOfLine;

			CommonMenuTexture.draw("gradient_nav", x, yCaption + textureHeight / 2, MainMenu.MENU_WIDTH, textureHeight, new Color(this._backgroundColor.red, this._backgroundColor.green, this._backgroundColor.blue, 220), 270);

			for (let i = 0; i < numberOfLine; i++) {
				drawText(this.caption.substring(i * textLengthPerLine, (i + 1) * textLengthPerLine), [x - MainMenu.MENU_DRAW_OFFSET_X + (0.004 * MainMenu.SCREEN_RATIO_WIDTH), yCaption + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT) + i * MainMenu.MENU_HEIGHT], this._textColor);
			}
		}
	}
}