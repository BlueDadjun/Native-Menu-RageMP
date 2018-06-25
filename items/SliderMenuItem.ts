class SliderMenuItem extends MenuItem {
	private min: number;
	private max: number;
	private step: number;

	private firstRender: boolean;
	private onChangeEvents: OnChangeItemMenuEvent[];

	public constructor(displayText: string, min: number, max: number, step: number, data: number = NaN, caption: string, badge: MenuBadge, textColor: Color, backgroundColor: Color, hoverTextColor: Color, hoverBackgroundColor: Color) {
		super(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor);

		this.min = min;
		this.max = max;
		this.step = step;

		if (isNaN(data)) {
			this.data = Math.floor((this.min + this.max) / 2);
		}

		this.firstRender = true;
		this.onChangeEvents = [];
	};

	public addOnChangeEvent(onChangeEvent: OnChangeItemMenuEvent): void {
		this.onChangeEvents.push(onChangeEvent);
	}

	public render(x: number, y: number, yCaption: number): void {
		if (this.firstRender) {
			this.setToValue(this.data, false);
			this.firstRender = false;
		}

		if (this._isSelect && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
			if (mp.game.controls.isControlPressed(0, Control.INPUT_CELLPHONE_RIGHT)) {
				this.setToValue(this.data + this.step);
			} else {
				if (mp.game.controls.isControlPressed(0, Control.INPUT_CELLPHONE_LEFT)) {
					this.setToValue(this.data - this.step);
				}
			}
		}

		super.render(x, y, yCaption);
	}

	protected draw(x: number, y: number, yCaption: number): void {
		super.draw(x, y, yCaption);

		let xMargin = (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
		let xOffset = x + MainMenu.MENU_DRAW_OFFSET_X - xMargin;

		/* draw slider bar */
		let sliderWidth = MainMenu.MENU_WIDTH / 2.5;
		let sliderHeight = MainMenu.MENU_HEIGHT / 4;
		let xPosition = xOffset - (sliderWidth / 2);
		mp.game.graphics.drawRect(xPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, sliderWidth, sliderHeight, 52, 73, 94, 255);

		/* draw tick */
		let xDataPosition = xOffset - sliderWidth + (sliderWidth / ((this.max - this.min) / this.step) * ((this.data + Math.abs(this.min)) / this.step));
		mp.game.graphics.drawRect(xDataPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, 0.004, sliderHeight * 2, this.textColor.red, this.textColor.green, this.textColor.blue, this.textColor.alpha);

		/* get x arrows positions */
		let arrowWidth = (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
		let xLeftArrowPosition = xOffset - sliderWidth - (arrowWidth / 2);

		/* draw arrows */
		CommonMenuTexture.draw("arrowleft", xLeftArrowPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, arrowWidth, (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
		CommonMenuTexture.draw("arrowright", xOffset + (arrowWidth / 2), y + MainMenu.MENU_DRAW_OFFSET_Y, arrowWidth, (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
	}

	private setToValue(newValue: number, withSound: boolean = true): void {
		if (newValue < this.min) {
			this.data = this.max;
		} else {
			if (newValue > this.max) {
				this.data = this.min;
			} else {
				this.data = newValue;
			}
		}

		if (withSound) {
			SOUND_NAV_LEFT_RIGHT.playSound();
		}

		MainMenu.LAST_TICK_TIME = Date.now();

		this.onChangeEvents.forEach(value => {
			value.trigger(this.data);
		});
	}
}