class Menu {
	private menuItems: MenuItem[];
	public currentIndexMenuItems: number;
	public onEventMenu: EventMenu;
	private _isVisible: boolean;

	public constructor(isVisible: boolean = true) {
		this.menuItems = [];
		this.currentIndexMenuItems = 0;
		this.onEventMenu = null;

		this._isVisible = isVisible;

		MenuPool.MenuInstances.push(this);
	}

	public add(menuItem: MenuItem): void {
		this.menuItems.push(menuItem);

		if (menuItem instanceof CloseMenuItem) {
			menuItem.addOnClickEvent({
				trigger: () => {
					this.isVisible = false;
				}
			});
		}
	}

	public setEventMenu(eventMenu: EventMenu) {
		this.onEventMenu = eventMenu;
	}

	public render(x: number, y: number): void {
		this.draw(x, y);
	}

	public draw(x: number, y: number): void {
		/* display up arrow */
		if (this.currentIndexMenuItems >= MainMenu.MAX_MENU_DISPLAY) {
			CommonMenuTexture.draw("gradient_nav", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, MainMenu.MENU_WIDTH, MainMenu.MENU_ARROW_DOWN_HEIGHT, new Color(0, 0, 0, 190), 90);
			CommonMenuTexture.draw("arrowleft", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, (0.015 * MainMenu.SCREEN_RATIO_WIDTH), (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(255, 255, 255, 200), 90);
			y += MainMenu.MENU_ARROW_DOWN_HEIGHT;
		}

		/* compute range of display elements */
		let i = Math.max(0, this.currentIndexMenuItems + 1 - MainMenu.MAX_MENU_DISPLAY);
		let to = Math.min(i + MainMenu.MAX_MENU_DISPLAY, this.menuItems.length);

		/* compute caption y position offset */
		let captionYOffset = y + ((to - i) * MainMenu.MENU_HEIGHT) + (0.02 * MainMenu.SCREEN_RATIO_HEIGHT);

		/* render item menu */
		for (; i < to; i++) {
			this.menuItems[i].render(x, y, captionYOffset);
			y += MainMenu.MENU_HEIGHT;
		}

		/* display down arrow */
		if (this.menuItems.length > MainMenu.MAX_MENU_DISPLAY && this.currentIndexMenuItems < this.menuItems.length - 1) {
			CommonMenuTexture.draw("gradient_nav", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, MainMenu.MENU_WIDTH, MainMenu.MENU_ARROW_DOWN_HEIGHT, new Color(0, 0, 0, 190), 270);
			CommonMenuTexture.draw("arrowleft", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, (0.015 * MainMenu.SCREEN_RATIO_WIDTH), (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(255, 255, 255, 200), 270);
		}
	}

	public get isVisible(): boolean {
		return this._isVisible;
	}

	public set isVisible(value: boolean) {
		this._isVisible = value;

		if (value) {
			this.setToItem(0);
			SOUND_NAV_LEFT_RIGHT.playSound();
		} else {
			this.menuItems[this.currentIndexMenuItems].isSelect = false;
			SOUND_BACK.playSound();
		}
	}

	public setToItem(newIndex: number, withSound: boolean = true): void {
		if (this.menuItems.length > 0) {
			this.menuItems[this.currentIndexMenuItems].isSelect = false;

			if (newIndex < 0) {
				newIndex = this.menuItems.length - 1;
			} else {
				newIndex %= this.menuItems.length;
			}

			if (withSound) {
				SOUND_NAV_UP_DOWN.playSound();
			}

			this.currentIndexMenuItems = newIndex;
			this.menuItems[this.currentIndexMenuItems].isSelect = true;

			MainMenu.LAST_TICK_TIME = new Date().getTime();
		}
	}
}