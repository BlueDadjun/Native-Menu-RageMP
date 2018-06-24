class CheckboxMenuItem extends MenuItem {
	public constructor(displayText: string, data: boolean = false, caption: string, badge: MenuBadge, textColor: Color, backgroundColor: Color, hoverTextColor: Color, hoverBackgroundColor: Color) {
		super(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor);

		this.addOnClickEvent({
			trigger: data => {
				this.data = !this.data;
			}
		});
	};

	protected draw(x: number, y: number, yCaption: number): void {
		super.draw(x, y, yCaption);

		CommonMenuTexture.draw(this.data ? "shop_box_tick" : "shop_box_blank", x + MainMenu.MENU_DRAW_OFFSET_X - (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(), 0);
	}
}