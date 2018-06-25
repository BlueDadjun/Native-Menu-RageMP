class ListMenuItem extends MenuItem {
	public dataCurrentIndex: number;
	private onChangeEvents: OnChangeItemMenuEvent[];
	private firstRender: boolean;
	private defaultIndex: number;

	constructor(displayText: string, data: any[], defaultIndex: number = 0, caption: string, badge: MenuBadge, textColor: Color, backgroundColor: Color, hoverTextColor: Color, hoverBackgroundColor: Color) {
		super(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor);

		this.onChangeEvents = [];
		this.firstRender = true;
		this.defaultIndex = defaultIndex;
	}

	public addOnChangeEvent(onChangeEvent: OnChangeItemMenuEvent) {
		this.onChangeEvents.push(onChangeEvent);
	}

	public render(x: number, y: number, yCaption: number): void {
		if (this.data.length > 0) {
			if (this.firstRender) {
				this.setToItem(this.defaultIndex, false);
				this.firstRender = false;
			}

			if (this._isSelect && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
				let newIndex = NaN;
				if (mp.game.controls.isControlPressed(0, Control.INPUT_CELLPHONE_RIGHT)) {
					this.setToItem(this.dataCurrentIndex + 1);
				} else {
					if (mp.game.controls.isControlPressed(0, Control.INPUT_CELLPHONE_LEFT)) {
						this.setToItem(this.dataCurrentIndex - 1);
					}
				}
			}
		}

		super.render(x, y, yCaption);
	}

	protected draw(x: number, y: number, yCaption: number): void {
		super.draw(x, y, yCaption);

		if (this.data.length > 0) {
			if (!isNaN(this.dataCurrentIndex) && this.data[this.dataCurrentIndex].DisplayText != null) {
				/* get x arrows positions */
				let xRightArrowPosition = x + MainMenu.MENU_DRAW_OFFSET_X - (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
				let xLeftArrowPosition = xRightArrowPosition - getTextWidth(this.data[this.dataCurrentIndex].DisplayText) - (0.015 * MainMenu.SCREEN_RATIO_WIDTH);

				/* draw arrows */
				CommonMenuTexture.draw("arrowleft", xLeftArrowPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
				CommonMenuTexture.draw("arrowright", xRightArrowPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);

				/* draw text between arrows */
				drawText(this.data[this.dataCurrentIndex].DisplayText, [(xLeftArrowPosition + xRightArrowPosition) / 2, y + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT)], this.textColor, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), [0.35, 0.35], true);
			}
		}
	}

	private setToItem(newIndex: number, withSound: boolean = true): void {
		if (newIndex < 0) {
			this.dataCurrentIndex = this.data.length - 1;
		} else {
			this.dataCurrentIndex = newIndex % this.data.length;
		}

		if (withSound) {
			SOUND_NAV_LEFT_RIGHT.playSound();
		}

		MainMenu.LAST_TICK_TIME = Date.now();

		this.onChangeEvents.forEach(value => {
			value.trigger(this.data[this.dataCurrentIndex]);
		});
	}
}