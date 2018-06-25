class MenuPool {
	public static MenuInstances: Menu[] = [];

	private constructor() {}

	public static getCurrentMenu(): Menu {
		let visibleMenus = MenuPool.MenuInstances.filter(value => value.isVisible);
		return visibleMenus[visibleMenus.length - 1];
	}

	public static displaySubMenu(menu: Menu):void {
		if (MenuPool.MenuInstances.indexOf(menu) == -1) {
			MenuPool.MenuInstances.push(menu);
		}

		menu.isVisible = true;
	}

	public static removeSubMenu(menu: Menu) {
		if (MenuPool.MenuInstances.indexOf(menu) != -1) {
			MenuPool.MenuInstances.splice(MenuPool.MenuInstances.indexOf(menu), 1);
			menu.isVisible = false;
		}
	}
}