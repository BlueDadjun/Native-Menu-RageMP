class MainMenu extends Menu {
    public static SCREEN_RATIO_WIDTH: number;
    public static SCREEN_RATIO_HEIGHT: number;
    public static MENU_WIDTH: number;
    public static MENU_HEIGHT: number;
    public static MAIN_MENU_HEIGHT: number;
    public static MENU_DRAW_OFFSET_X: number;
    public static MENU_DRAW_OFFSET_Y: number;
    public static MENU_ARROW_DOWN_HEIGHT: number;

    public static MAX_MENU_DISPLAY: number = 8;
    public static CONTROL_TICK_TIME_MS: number = 150;
    public static LAST_TICK_TIME: number = Date.now();
    public static MenuInstances: Menu[] = [];

    private _title: string;
    private isVisible: boolean;
    private firstRender: boolean;

    public constructor(title: string = "", isVisible: boolean = true) {
        super();

        this.title = title;
        this.isVisible = isVisible;

        this.firstRender = true;
        MainMenu.MenuInstances.push(this);
    }

    public set title(value: string) {
        this._title = value;
    }

    public render(x: number, y: number): void {
        if (this.firstRender) {
	        this.setToItem(0);
            this.firstRender = false;
        }

	    this.setResolutionRatio();

        if (this.isVisible) {
            x = Math.min(MainMenu.MENU_DRAW_OFFSET_X + x, 1 - MainMenu.MENU_DRAW_OFFSET_X);
            y = Math.min(MainMenu.MENU_DRAW_OFFSET_Y + y, 1 - MainMenu.MENU_DRAW_OFFSET_Y);

            /* set header menu */
            CommonMenuTexture.draw("interaction_bgd", x, y, MainMenu.MENU_WIDTH, MainMenu.MAIN_MENU_HEIGHT, new Color(255, 255, 255, 255), 0);
            drawText(this._title, [x, y - MainMenu.MENU_DRAW_OFFSET_Y * 1.4], new Color(), 1, [1, 1], true);
            y += (MainMenu.MAIN_MENU_HEIGHT / 2);

            if (Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
                if (mp.keys.isDown(40)) {
                    let menuInstance = MainMenu.MenuInstances[MainMenu.MenuInstances.length - 1];
                    menuInstance.setToItem(menuInstance.currentIndexMenuItems + 1);
                } else {
                    if (mp.keys.isDown(38)) {
                        let menuInstance = MainMenu.MenuInstances[MainMenu.MenuInstances.length - 1];
                        menuInstance.setToItem(menuInstance.currentIndexMenuItems - 1);
                    }
                }
            }

            super.render(x, y);
        }
    }

    private setResolutionRatio(): void {
	    MainMenu.SCREEN_RATIO_WIDTH = 1024 / mp.game.graphics.getScreenActiveResolution(0, 0).x;
	    MainMenu.SCREEN_RATIO_HEIGHT = 768 / mp.game.graphics.getScreenActiveResolution(0, 0).y;
	    MainMenu.MENU_WIDTH = 0.27 * MainMenu.SCREEN_RATIO_WIDTH;

	    /* set responsive width menu depending title length */
	    MainMenu.MENU_WIDTH = Math.max(MainMenu.MENU_WIDTH, getTextWidth(this._title, 1, [1, 1]) + MainMenu.MENU_WIDTH / 5);

	    MainMenu.MENU_HEIGHT = 0.04 * MainMenu.SCREEN_RATIO_HEIGHT;
	    MainMenu.MAIN_MENU_HEIGHT = MainMenu.MENU_HEIGHT * 2.5;
	    MainMenu.MENU_DRAW_OFFSET_X = MainMenu.MENU_WIDTH / 2;
	    MainMenu.MENU_DRAW_OFFSET_Y = MainMenu.MENU_HEIGHT / 2;
	    MainMenu.MENU_ARROW_DOWN_HEIGHT = MainMenu.MENU_HEIGHT / 3;
    }

    public open(): void {
        this.isVisible = true;
    }

    public close(): void {
        this.isVisible = false;
    }
}