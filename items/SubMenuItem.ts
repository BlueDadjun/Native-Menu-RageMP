class SubMenuItem extends MenuItem {
	public menu: Menu;

	public constructor(displayText: string, data: any, caption: string, badge: MenuBadge, textColor: Color, backgroundColor: Color, hoverTextColor: Color, hoverBackgroundColor: Color) {
		super(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor);

		this.menu = new Menu();
	}

	public add(menuItem: MenuItem): void {
		this.menu.add(menuItem);
	}

	public render(x: number, y: number, yCaption: number): void {
		if (this._active) {
			if (MainMenu.MenuInstances.indexOf(this.menu) != -1) {
				this.menu.render(x + MainMenu.MENU_WIDTH, y);
			}

			if (Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
				if (mp.game.controls.isControlPressed(0, Control.INPUT_CELLPHONE_RIGHT)) {
					if (MainMenu.MenuInstances.indexOf(this.menu) == -1) {
						MainMenu.MenuInstances.push(this.menu);
						this.menu.setToItem(0);
					}
				} else {
					if (mp.game.controls.isControlPressed(0, Control.INPUT_CELLPHONE_LEFT)) {
						if (MainMenu.MenuInstances.indexOf(this.menu) != -1) {
							MainMenu.MenuInstances.splice(MainMenu.MenuInstances.indexOf(this.menu), 1);
							MainMenu.LAST_TICK_TIME = Date.now();
						}
					}
				}
			}
		}

		this.draw(x, y, yCaption);
	}

	protected draw(x: number, y: number, yCaption: number): void {
		super.draw(x, y, yCaption);

		/* draw arrows */
		CommonMenuTexture.draw("arrowright", x + MainMenu.MENU_DRAW_OFFSET_X - (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
	}
}