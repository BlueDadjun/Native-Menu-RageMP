enum MenuBadge {
	MEDAL_BRONZE,
	MEDAL_GOLD,
	MEDAL_SILVER,
	MP_ALERTTRIANGLE,
	MP_HOSTCROWN,
	MP_MEDAL_BRONZE,
	MP_MEDAL_GOLD,
	MP_MEDAL_SILVER,
	MP_SPECITEM_CASH,
	MP_SPECITEM_COKE,
	MP_SPECITEM_HEROIN,
	MP_SPECITEM_METH,
	MP_SPECITEM_WEED,
	SHOP_AMMO,
	SHOP_ARMOUR,
	SHOP_ARROWS_UPANDDOWN,
	SHOP_BARBER,
	SHOP_BOX_BLANK,
	SHOP_BOX_CROSS,
	SHOP_BOX_TICK,
	SHOP_CLOTHING,
	SHOP_FRANKLIN,
	SHOP_GARAGE_BIKE,
	SHOP_GARAGE,
	SHOP_GUNCLUB,
	SHOP_HEALTH,
	SHOP_LOCK,
	SHOP_MAKEUP,
	SHOP_MASK,
	SHOP_MICHAEL,
	SHOP_NEW_STAR,
	SHOP_TATTOOS,
	SHOP_TICK_ICON,
	SHOP_TREVOR
}

function MenuBadgeToSpriteName(badge: MenuBadge, isHover: boolean = false) {
	let result = MenuBadge[badge].toString().toLowerCase();

	switch (badge) {
		case MenuBadge.SHOP_AMMO:
		case MenuBadge.SHOP_ARMOUR:
		case MenuBadge.SHOP_ARROWS_UPANDDOWN:
		case MenuBadge.SHOP_BARBER:
		case MenuBadge.SHOP_CLOTHING:
		case MenuBadge.SHOP_FRANKLIN:
		case MenuBadge.SHOP_GARAGE_BIKE:
		case MenuBadge.SHOP_GARAGE:
		case MenuBadge.SHOP_GUNCLUB:
		case MenuBadge.SHOP_HEALTH:
		case MenuBadge.SHOP_MAKEUP:
		case MenuBadge.SHOP_MASK:
		case MenuBadge.SHOP_MICHAEL:
		case MenuBadge.SHOP_TATTOOS:
		case MenuBadge.SHOP_TREVOR:
			return isHover ? result + "_icon_a" : result + "_icon_b";

		case MenuBadge.SHOP_BOX_BLANK:
		case MenuBadge.SHOP_BOX_CROSS:
		case MenuBadge.SHOP_BOX_TICK:
			return isHover ? result + "b" : result;

		default:
			return result;
	}
}