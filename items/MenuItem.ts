abstract class MenuItem {
	public displayText: string;
	public data: any;

	protected _isSelect: boolean;
	protected onClickEvents: OnClickItemMenuEvent[];
	protected onSelectEvents: OnSelectItemMenuEvent[];

	private readonly badge: MenuBadge;
	private readonly caption: string;

	private _textColor: Color;
	private _backgroundColor: Color;
	private _hoverTextColor: Color;
	private _hoverBackgroundColor: Color;

	protected constructor(displayText: string, data: any, caption: string = "", badge: MenuBadge = NaN, textColor: Color = new Color(255, 255, 255, 240), backgroundColor: Color = new Color(0, 0, 0, 120), hoverTextColor: Color = new Color(0, 0, 0, 240), hoverBackgroundColor: Color = new Color(255, 255, 255, 170)) {
		this.displayText = displayText;
		this.data = data;

		this.caption = caption;
		this.badge = badge;

		this._textColor = textColor;
		this._backgroundColor = backgroundColor;
		this._hoverTextColor = hoverTextColor;
		this._hoverBackgroundColor = hoverBackgroundColor;

		this._isSelect = false;
		this.onClickEvents = [];
		this.onSelectEvents = [];
	}

	public set isSelect(value: boolean) {
		this._isSelect = value;

		/* trigger hover menu */
		if (this._isSelect && !(this instanceof CloseMenuItem)) {
			this.onSelectEvents.forEach(event => {
				event.trigger(this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
			});

			let currentMenuInstance = MenuPool.getCurrentMenu();
			if (currentMenuInstance.onEventMenu != null && typeof currentMenuInstance.onEventMenu.select !== "undefined") {
				currentMenuInstance.onEventMenu.select(this, this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
			}
		}
	}

	public addOnClickEvent(onClickEvent: OnClickItemMenuEvent): void {
		this.onClickEvents.push(onClickEvent);
	}

	public addOnSelectEvent(onSelectEvent: OnSelectItemMenuEvent): void {
		this.onSelectEvents.push(onSelectEvent);
	}

	public render(x: number, y: number, yCaption: number): void {
		this.draw(x, y, yCaption);

		if (this._isSelect && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
			if (mp.game.controls.isControlJustReleased(0, Control.INPUT_FRONTEND_ACCEPT)) {
				SOUND_SELECT.playSound();
				this.onClickEvents.forEach(event => {
					event.trigger(this instanceof ListMenuItem ? this.data[this.dataCurrentIndex] : this.data);
				});

				if (!(this instanceof CloseMenuItem)) {
					let currentMenuInstance = MenuPool.getCurrentMenu();
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
			CommonMenuTexture.draw(MenuBadgeToSpriteName(this.badge, this._isSelect), x - MainMenu.MENU_DRAW_OFFSET_X + (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(160, 160, 160), 0);
			xOffset += (0.023 * MainMenu.SCREEN_RATIO_WIDTH);
		}

		/* display text */
		drawText(this.displayText, [xOffset, y + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT)], this.textColor);

		/* display caption */
		if (this._isSelect && this.caption.length > 0) {
			let numberOfLine = Math.ceil(getTextWidth(this.caption) / MainMenu.MENU_WIDTH);
			let textLengthPerLine = this.caption.length / numberOfLine;
			let textureHeight = MainMenu.MENU_HEIGHT * numberOfLine;

			CommonMenuTexture.draw("gradient_nav", x, yCaption + textureHeight / 2, MainMenu.MENU_WIDTH, textureHeight, new Color(this._backgroundColor.red, this._backgroundColor.green, this._backgroundColor.blue, 220), 270);

			for (let i = 0; i < numberOfLine; i++) {
				drawText(this.caption.substring(i * textLengthPerLine, (i + 1) * textLengthPerLine), [x - MainMenu.MENU_DRAW_OFFSET_X + (0.004 * MainMenu.SCREEN_RATIO_WIDTH), yCaption + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT) + i * MainMenu.MENU_HEIGHT], this._textColor);
			}
		}
	}

	get hoverTextColor(): Color {
		return this._hoverTextColor;
	}

	set hoverTextColor(value: Color) {
		this._hoverTextColor = value;
	}

	get hoverBackgroundColor(): Color {
		return this._hoverBackgroundColor;
	}

	set hoverBackgroundColor(value: Color) {
		this._hoverBackgroundColor = value;
	}

	get textColor(): Color {
		return this._isSelect ? this._hoverTextColor : this._textColor;
	}

	set textColor(value: Color) {
		this._textColor = value;
	}

	get backgroundColor(): Color {
		return this._isSelect ? this._hoverBackgroundColor : this._backgroundColor;
	}

	set backgroundColor(value: Color) {
		this._backgroundColor = value;
	}
}