var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MenuBadge;
(function (MenuBadge) {
    MenuBadge[MenuBadge["MEDAL_BRONZE"] = 0] = "MEDAL_BRONZE";
    MenuBadge[MenuBadge["MEDAL_GOLD"] = 1] = "MEDAL_GOLD";
    MenuBadge[MenuBadge["MEDAL_SILVER"] = 2] = "MEDAL_SILVER";
    MenuBadge[MenuBadge["MP_ALERTTRIANGLE"] = 3] = "MP_ALERTTRIANGLE";
    MenuBadge[MenuBadge["MP_HOSTCROWN"] = 4] = "MP_HOSTCROWN";
    MenuBadge[MenuBadge["MP_MEDAL_BRONZE"] = 5] = "MP_MEDAL_BRONZE";
    MenuBadge[MenuBadge["MP_MEDAL_GOLD"] = 6] = "MP_MEDAL_GOLD";
    MenuBadge[MenuBadge["MP_MEDAL_SILVER"] = 7] = "MP_MEDAL_SILVER";
    MenuBadge[MenuBadge["MP_SPECITEM_CASH"] = 8] = "MP_SPECITEM_CASH";
    MenuBadge[MenuBadge["MP_SPECITEM_COKE"] = 9] = "MP_SPECITEM_COKE";
    MenuBadge[MenuBadge["MP_SPECITEM_HEROIN"] = 10] = "MP_SPECITEM_HEROIN";
    MenuBadge[MenuBadge["MP_SPECITEM_METH"] = 11] = "MP_SPECITEM_METH";
    MenuBadge[MenuBadge["MP_SPECITEM_WEED"] = 12] = "MP_SPECITEM_WEED";
    MenuBadge[MenuBadge["SHOP_AMMO"] = 13] = "SHOP_AMMO";
    MenuBadge[MenuBadge["SHOP_ARMOUR"] = 14] = "SHOP_ARMOUR";
    MenuBadge[MenuBadge["SHOP_ARROWS_UPANDDOWN"] = 15] = "SHOP_ARROWS_UPANDDOWN";
    MenuBadge[MenuBadge["SHOP_BARBER"] = 16] = "SHOP_BARBER";
    MenuBadge[MenuBadge["SHOP_BOX_BLANK"] = 17] = "SHOP_BOX_BLANK";
    MenuBadge[MenuBadge["SHOP_BOX_CROSS"] = 18] = "SHOP_BOX_CROSS";
    MenuBadge[MenuBadge["SHOP_BOX_TICK"] = 19] = "SHOP_BOX_TICK";
    MenuBadge[MenuBadge["SHOP_CLOTHING"] = 20] = "SHOP_CLOTHING";
    MenuBadge[MenuBadge["SHOP_FRANKLIN"] = 21] = "SHOP_FRANKLIN";
    MenuBadge[MenuBadge["SHOP_GARAGE_BIKE"] = 22] = "SHOP_GARAGE_BIKE";
    MenuBadge[MenuBadge["SHOP_GARAGE"] = 23] = "SHOP_GARAGE";
    MenuBadge[MenuBadge["SHOP_GUNCLUB"] = 24] = "SHOP_GUNCLUB";
    MenuBadge[MenuBadge["SHOP_HEALTH"] = 25] = "SHOP_HEALTH";
    MenuBadge[MenuBadge["SHOP_LOCK"] = 26] = "SHOP_LOCK";
    MenuBadge[MenuBadge["SHOP_MAKEUP"] = 27] = "SHOP_MAKEUP";
    MenuBadge[MenuBadge["SHOP_MASK"] = 28] = "SHOP_MASK";
    MenuBadge[MenuBadge["SHOP_MICHAEL"] = 29] = "SHOP_MICHAEL";
    MenuBadge[MenuBadge["SHOP_NEW_STAR"] = 30] = "SHOP_NEW_STAR";
    MenuBadge[MenuBadge["SHOP_TATTOOS"] = 31] = "SHOP_TATTOOS";
    MenuBadge[MenuBadge["SHOP_TICK_ICON"] = 32] = "SHOP_TICK_ICON";
    MenuBadge[MenuBadge["SHOP_TREVOR"] = 33] = "SHOP_TREVOR";
})(MenuBadge || (MenuBadge = {}));
function MenuBadgeToSpriteName(badge, isHover) {
    if (isHover === void 0) { isHover = false; }
    var result = MenuBadge[badge].toString().toLowerCase();
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
var Color = (function () {
    function Color(red, green, blue, alpha) {
        if (red === void 0) { red = 255; }
        if (green === void 0) { green = 255; }
        if (blue === void 0) { blue = 255; }
        if (alpha === void 0) { alpha = 255; }
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    return Color;
}());
var TextureDictionnary = (function () {
    function TextureDictionnary(textureDict, textures) {
        this.textureDictionnary = textureDict;
        this.textures = textures;
    }
    TextureDictionnary.prototype.draw = function (textureName, screenX, screenY, scaleX, scaleY, color, heading) {
        if (color === void 0) { color = new Color(255, 255, 255); }
        if (heading === void 0) { heading = 0; }
        if (this.textures.indexOf(textureName) !== -1) {
            if (mp.game.graphics.hasStreamedTextureDictLoaded(this.textureDictionnary) == false) {
                mp.game.graphics.requestStreamedTextureDict(this.textureDictionnary, true);
            }
            mp.game.graphics.drawSprite(this.textureDictionnary, textureName, screenX, screenY, scaleX, scaleY, heading, color.red, color.green, color.blue, color.alpha);
        }
    };
    return TextureDictionnary;
}());
var CommonMenuTexture = new TextureDictionnary("commonmenu", [
    "arrowleft",
    "arrowright",
    "bettingbox_centre",
    "bettingbox_left",
    "bettingbox_right",
    "common_medal",
    "gradient_bgd",
    "gradient_nav",
    "header_gradient_script",
    "interaction_bgd",
    "medal_bronze",
    "medal_gold",
    "medal_silver",
    "mp_alerttriangle",
    "mp_hostcrown",
    "mp_medal_bronze",
    "mp_medal_gold",
    "mp_medal_silver",
    "mp_specitem_cash",
    "mp_specitem_coke",
    "mp_specitem_heroin",
    "mp_specitem_meth",
    "mp_specitem_weed",
    "shop_ammo_icon_a",
    "shop_ammo_icon_b",
    "shop_armour_icon_a",
    "shop_armour_icon_b",
    "shop_arrows_upanddown",
    "shop_barber_icon_a",
    "shop_barber_icon_b",
    "shop_box_blank",
    "shop_box_blankb",
    "shop_box_cross",
    "shop_box_crossb",
    "shop_box_tick",
    "shop_box_tickb",
    "shop_clothing_icon_a",
    "shop_clothing_icon_b",
    "shop_franklin_icon_a",
    "shop_franklin_icon_b",
    "shop_garage_bike_icon_a",
    "shop_garage_bike_icon_b",
    "shop_garage_icon_a",
    "shop_garage_icon_b",
    "shop_gunclub_icon_a",
    "shop_gunclub_icon_b",
    "shop_health_icon_a",
    "shop_health_icon_b",
    "shop_lock",
    "shop_makeup_icon_a",
    "shop_makeup_icon_b",
    "shop_mask_icon_a",
    "shop_mask_icon_b",
    "shop_michael_icon_a",
    "shop_michael_icon_b",
    "shop_new_star",
    "shop_tattoos_icon_a",
    "shop_tattoos_icon_b",
    "shop_tick_icon",
    "shop_trevor_icon_a",
    "shop_trevor_icon_b"
]);
function drawText(text, position, color, font, scale, isTextCenter) {
    if (position === void 0) { position = []; }
    if (font === void 0) { font = 0; }
    if (scale === void 0) { scale = [0.35, 0.35]; }
    if (isTextCenter === void 0) { isTextCenter = false; }
    mp.game.ui.setTextFont(font);
    mp.game.ui.setTextScale(scale[0] * MainMenu.SCREEN_RATIO_WIDTH, scale[1] * MainMenu.SCREEN_RATIO_HEIGHT);
    mp.game.ui.setTextColour(color.red, color.green, color.blue, color.alpha);
    mp.game.ui.setTextCentre(isTextCenter);
    mp.game.ui.setTextEntry("STRING");
    mp.game.ui.addTextComponentSubstringPlayerName(text);
    mp.game.ui.drawText(position[0], position[1]);
}
function getTextWidth(text, font, scale) {
    if (font === void 0) { font = 0; }
    if (scale === void 0) { scale = [0.35, 0.35]; }
    mp.game.ui.setTextFont(font);
    mp.game.ui.setTextScale(scale[0], scale[1]);
    mp.game.ui.setTextEntryForWidth("STRING");
    mp.game.ui.addTextComponentSubstringPlayerName(text);
    return mp.game.ui.getTextScreenWidth(true);
}
var MenuItem = (function () {
    function MenuItem(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) {
        if (caption === void 0) { caption = ""; }
        if (badge === void 0) { badge = NaN; }
        if (textColor === void 0) { textColor = new Color(255, 255, 255, 240); }
        if (backgroundColor === void 0) { backgroundColor = new Color(0, 0, 0, 120); }
        if (hoverTextColor === void 0) { hoverTextColor = new Color(0, 0, 0, 240); }
        if (hoverBackgroundColor === void 0) { hoverBackgroundColor = new Color(255, 255, 255, 170); }
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
    Object.defineProperty(MenuItem.prototype, "active", {
        set: function (value) {
            var _this = this;
            this._active = value;
            if (this._active) {
                this.onSelectEvents.forEach(function (value) {
                    if (_this instanceof ListMenuItem) {
                        value.trigger(_this.data[_this.dataCurrentIndex]);
                    }
                    else {
                        value.trigger(_this.data);
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "textColor", {
        get: function () {
            return this._active ? this.hoverTextColor : this._textColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "backgroundColor", {
        get: function () {
            return this._active ? this.hoverBackgroundColor : this._backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    MenuItem.prototype.addOnClickEvent = function (onClickEvent) {
        this.onClickEvents.push(onClickEvent);
    };
    MenuItem.prototype.addOnSelectEvent = function (onSelectEvent) {
        this.onSelectEvents.push(onSelectEvent);
    };
    MenuItem.prototype.render = function (x, y, yCaption) {
        var _this = this;
        this.draw(x, y, yCaption);
        if (this._active && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
            if (mp.keys.isDown(13)) {
                mp.gui.chat.push(this.displayText);
                this.onClickEvents.forEach(function (value) {
                    if (_this instanceof ListMenuItem) {
                        value.trigger(_this.data[_this.dataCurrentIndex]);
                    }
                    else {
                        value.trigger(_this.data);
                    }
                });
                MainMenu.LAST_TICK_TIME = Date.now();
            }
        }
    };
    MenuItem.prototype.draw = function (x, y, yCaption) {
        mp.game.graphics.drawRect(x, y + MainMenu.MENU_DRAW_OFFSET_Y, MainMenu.MENU_WIDTH, MainMenu.MENU_HEIGHT, this.backgroundColor.red, this.backgroundColor.green, this.backgroundColor.blue, this.backgroundColor.alpha);
        var xOffset = x - MainMenu.MENU_DRAW_OFFSET_X + (0.004 * MainMenu.SCREEN_RATIO_WIDTH);
        if (!isNaN(this.badge)) {
            CommonMenuTexture.draw(MenuBadgeToSpriteName(this.badge, this._active), x - MainMenu.MENU_DRAW_OFFSET_X + (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(160, 160, 160), 0);
            xOffset += (0.023 * MainMenu.SCREEN_RATIO_WIDTH);
        }
        drawText(this.displayText, [xOffset, y + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT)], this.textColor);
        if (this._active && this.caption.length > 0) {
            var numberOfLine = Math.ceil(getTextWidth(this.caption) / MainMenu.MENU_WIDTH);
            var textLengthPerLine = this.caption.length / numberOfLine;
            var textureHeight = MainMenu.MENU_HEIGHT * numberOfLine;
            CommonMenuTexture.draw("gradient_nav", x, yCaption + textureHeight / 2, MainMenu.MENU_WIDTH, textureHeight, new Color(this._backgroundColor.red, this._backgroundColor.green, this._backgroundColor.blue, 220), 270);
            for (var i = 0; i < numberOfLine; i++) {
                drawText(this.caption.substring(i * textLengthPerLine, (i + 1) * textLengthPerLine), [x - MainMenu.MENU_DRAW_OFFSET_X + (0.004 * MainMenu.SCREEN_RATIO_WIDTH), yCaption + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT) + i * MainMenu.MENU_HEIGHT], this._textColor);
            }
        }
    };
    return MenuItem;
}());
var TextMenuItem = (function (_super) {
    __extends(TextMenuItem, _super);
    function TextMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextMenuItem;
}(MenuItem));
var CheckboxMenuItem = (function (_super) {
    __extends(CheckboxMenuItem, _super);
    function CheckboxMenuItem(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) {
        if (data === void 0) { data = false; }
        var _this = _super.call(this, displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) || this;
        _this.addOnClickEvent({
            trigger: function (data) {
                _this.data = !_this.data;
            }
        });
        return _this;
    }
    ;
    CheckboxMenuItem.prototype.draw = function (x, y, yCaption) {
        _super.prototype.draw.call(this, x, y, yCaption);
        CommonMenuTexture.draw(this.data ? "shop_box_tick" : "shop_box_blank", x + MainMenu.MENU_DRAW_OFFSET_X - (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(), 0);
    };
    return CheckboxMenuItem;
}(MenuItem));
var ListMenuItem = (function (_super) {
    __extends(ListMenuItem, _super);
    function ListMenuItem(displayText, data, defaultIndex, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) {
        if (defaultIndex === void 0) { defaultIndex = 0; }
        var _this = _super.call(this, displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) || this;
        _this.onChangeEvents = [];
        _this.firstRender = true;
        _this.defaultIndex = defaultIndex;
        return _this;
    }
    ListMenuItem.prototype.addOnChangeEvent = function (onChangeEvent) {
        this.onChangeEvents.push(onChangeEvent);
    };
    ListMenuItem.prototype.render = function (x, y, yCaption) {
        if (this.data.length > 0) {
            if (this.firstRender) {
                this.setToItem(this.defaultIndex);
                this.firstRender = false;
            }
            if (this._active && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
                if (mp.keys.isDown(39)) {
                    this.setToItem(this.dataCurrentIndex + 1);
                }
                else {
                    if (mp.keys.isDown(37)) {
                        this.setToItem(this.dataCurrentIndex - 1);
                    }
                }
            }
        }
        _super.prototype.render.call(this, x, y, yCaption);
    };
    ListMenuItem.prototype.draw = function (x, y, yCaption) {
        _super.prototype.draw.call(this, x, y, yCaption);
        if (this.data.length > 0) {
            if (!isNaN(this.dataCurrentIndex) && this.data[this.dataCurrentIndex].DisplayText != null) {
                var xRightArrowPosition = x + MainMenu.MENU_DRAW_OFFSET_X - (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
                var xLeftArrowPosition = xRightArrowPosition - getTextWidth(this.data[this.dataCurrentIndex].DisplayText) - (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
                CommonMenuTexture.draw("arrowleft", xLeftArrowPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
                CommonMenuTexture.draw("arrowright", xRightArrowPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
                drawText(this.data[this.dataCurrentIndex].DisplayText, [(xLeftArrowPosition + xRightArrowPosition) / 2, y + (0.005 * MainMenu.SCREEN_RATIO_HEIGHT)], this.textColor, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), [0.35, 0.35], true);
            }
        }
    };
    ListMenuItem.prototype.setToItem = function (newIndex) {
        var _this = this;
        if (newIndex < 0) {
            this.dataCurrentIndex = this.data.length - 1;
        }
        else {
            this.dataCurrentIndex = newIndex % this.data.length;
        }
        MainMenu.LAST_TICK_TIME = Date.now();
        this.onChangeEvents.forEach(function (value) {
            value.trigger(_this.data[_this.dataCurrentIndex]);
        });
    };
    return ListMenuItem;
}(MenuItem));
var SliderMenuItem = (function (_super) {
    __extends(SliderMenuItem, _super);
    function SliderMenuItem(displayText, min, max, step, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) {
        if (data === void 0) { data = NaN; }
        var _this = _super.call(this, displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) || this;
        _this.min = min;
        _this.max = max;
        _this.step = step;
        if (isNaN(data)) {
            _this.data = Math.floor((_this.min + _this.max) / 2);
        }
        _this.firstRender = true;
        _this.onChangeEvents = [];
        return _this;
    }
    ;
    SliderMenuItem.prototype.addOnChangeEvent = function (onChangeEvent) {
        this.onChangeEvents.push(onChangeEvent);
    };
    SliderMenuItem.prototype.render = function (x, y, yCaption) {
        if (this.firstRender) {
            this.setToValue(this.data);
            this.firstRender = false;
        }
        if (this._active && Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
            if (mp.keys.isDown(39)) {
                this.setToValue(this.data + this.step);
            }
            else {
                if (mp.keys.isDown(37)) {
                    this.setToValue(this.data - this.step);
                }
            }
        }
        _super.prototype.render.call(this, x, y, yCaption);
    };
    SliderMenuItem.prototype.draw = function (x, y, yCaption) {
        _super.prototype.draw.call(this, x, y, yCaption);
        var xMargin = (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
        var xOffset = x + MainMenu.MENU_DRAW_OFFSET_X - xMargin;
        var sliderWidth = MainMenu.MENU_WIDTH / 2.5;
        var sliderHeight = MainMenu.MENU_HEIGHT / 4;
        var xPosition = xOffset - (sliderWidth / 2);
        mp.game.graphics.drawRect(xPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, sliderWidth, sliderHeight, 52, 73, 94, 255);
        var xDataPosition = xOffset - sliderWidth + (sliderWidth / (this.min + this.max) * this.data);
        mp.game.graphics.drawRect(xDataPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, 0.004, sliderHeight * 2, this.textColor.red, this.textColor.green, this.textColor.blue, this.textColor.alpha);
        var arrowWidth = (0.015 * MainMenu.SCREEN_RATIO_WIDTH);
        var xLeftArrowPosition = xOffset - sliderWidth - (arrowWidth / 2);
        CommonMenuTexture.draw("arrowleft", xLeftArrowPosition, y + MainMenu.MENU_DRAW_OFFSET_Y, arrowWidth, (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
        CommonMenuTexture.draw("arrowright", xOffset + (arrowWidth / 2), y + MainMenu.MENU_DRAW_OFFSET_Y, arrowWidth, (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
    };
    SliderMenuItem.prototype.setToValue = function (newValue) {
        var _this = this;
        if (newValue < this.min) {
            this.data = this.max;
        }
        else {
            this.data = newValue % (this.max + this.step);
        }
        MainMenu.LAST_TICK_TIME = Date.now();
        this.onChangeEvents.forEach(function (value) {
            value.trigger(_this.data);
        });
    };
    return SliderMenuItem;
}(MenuItem));
var Menu = (function () {
    function Menu() {
        this.menuItems = [];
        this.currentIndexMenuItems = 0;
    }
    Menu.prototype.add = function (menuItem) {
        this.menuItems.push(menuItem);
    };
    Menu.prototype.render = function (x, y) {
        this.draw(x, y);
    };
    Menu.prototype.draw = function (x, y) {
        if (this.currentIndexMenuItems >= MainMenu.MAX_MENU_DISPLAY) {
            CommonMenuTexture.draw("gradient_nav", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, MainMenu.MENU_WIDTH, MainMenu.MENU_ARROW_DOWN_HEIGHT, new Color(0, 0, 0, 190), 90);
            CommonMenuTexture.draw("arrowleft", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, (0.015 * MainMenu.SCREEN_RATIO_WIDTH), (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(255, 255, 255, 200), 90);
            y += MainMenu.MENU_ARROW_DOWN_HEIGHT;
        }
        var i = Math.max(0, this.currentIndexMenuItems + 1 - MainMenu.MAX_MENU_DISPLAY);
        var to = Math.min(i + MainMenu.MAX_MENU_DISPLAY, this.menuItems.length);
        var captionYOffset = y + ((to - i) * MainMenu.MENU_HEIGHT) + (0.02 * MainMenu.SCREEN_RATIO_HEIGHT);
        for (; i < to; i++) {
            this.menuItems[i].render(x, y, captionYOffset);
            y += MainMenu.MENU_HEIGHT;
        }
        if (this.menuItems.length > MainMenu.MAX_MENU_DISPLAY && this.currentIndexMenuItems < this.menuItems.length - 1) {
            CommonMenuTexture.draw("gradient_nav", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, MainMenu.MENU_WIDTH, MainMenu.MENU_ARROW_DOWN_HEIGHT, new Color(0, 0, 0, 190), 270);
            CommonMenuTexture.draw("arrowleft", x, y + MainMenu.MENU_ARROW_DOWN_HEIGHT / 2, (0.015 * MainMenu.SCREEN_RATIO_WIDTH), (0.025 * MainMenu.SCREEN_RATIO_HEIGHT), new Color(255, 255, 255, 200), 270);
        }
    };
    Menu.prototype.setToItem = function (newIndex) {
        this.menuItems[this.currentIndexMenuItems].active = false;
        if (newIndex < 0) {
            newIndex = this.menuItems.length - 1;
        }
        else {
            newIndex %= this.menuItems.length;
        }
        this.currentIndexMenuItems = newIndex;
        this.menuItems[this.currentIndexMenuItems].active = true;
        MainMenu.LAST_TICK_TIME = new Date().getTime();
    };
    return Menu;
}());
var SubMenuItem = (function (_super) {
    __extends(SubMenuItem, _super);
    function SubMenuItem(displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) {
        var _this = _super.call(this, displayText, data, caption, badge, textColor, backgroundColor, hoverTextColor, hoverBackgroundColor) || this;
        _this.menu = new Menu();
        return _this;
    }
    SubMenuItem.prototype.add = function (menuItem) {
        this.menu.add(menuItem);
    };
    SubMenuItem.prototype.render = function (x, y, yCaption) {
        if (this._active) {
            if (MainMenu.MenuInstances.indexOf(this.menu) != -1) {
                this.menu.render(x + MainMenu.MENU_WIDTH, y);
            }
            if (Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
                if (mp.keys.isDown(39)) {
                    if (MainMenu.MenuInstances.indexOf(this.menu) == -1) {
                        MainMenu.MenuInstances.push(this.menu);
                        this.menu.setToItem(0);
                    }
                }
                else {
                    if (mp.keys.isDown(37)) {
                        if (MainMenu.MenuInstances.indexOf(this.menu) != -1) {
                            MainMenu.MenuInstances.splice(MainMenu.MenuInstances.indexOf(this.menu), 1);
                            MainMenu.LAST_TICK_TIME = Date.now();
                        }
                    }
                }
            }
        }
        this.draw(x, y, yCaption);
    };
    SubMenuItem.prototype.draw = function (x, y, yCaption) {
        _super.prototype.draw.call(this, x, y, yCaption);
        CommonMenuTexture.draw("arrowright", x + MainMenu.MENU_DRAW_OFFSET_X - (0.015 * MainMenu.SCREEN_RATIO_WIDTH), y + MainMenu.MENU_DRAW_OFFSET_Y, (0.025 * MainMenu.SCREEN_RATIO_WIDTH), (0.035 * MainMenu.SCREEN_RATIO_HEIGHT), this.textColor, 0);
    };
    return SubMenuItem;
}(MenuItem));
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(title, isVisible) {
        if (title === void 0) { title = ""; }
        if (isVisible === void 0) { isVisible = true; }
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.isVisible = isVisible;
        _this.firstRender = true;
        MainMenu.MenuInstances.push(_this);
        return _this;
    }
    Object.defineProperty(MainMenu.prototype, "title", {
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    MainMenu.prototype.render = function (x, y) {
        if (this.firstRender) {
            this.setToItem(0);
            this.firstRender = false;
        }
        this.setResolutionRatio();
        if (this.isVisible) {
            x = Math.min(MainMenu.MENU_DRAW_OFFSET_X + x, 1 - MainMenu.MENU_DRAW_OFFSET_X);
            y = Math.min(MainMenu.MENU_DRAW_OFFSET_Y + y, 1 - MainMenu.MENU_DRAW_OFFSET_Y);
            CommonMenuTexture.draw("interaction_bgd", x, y, MainMenu.MENU_WIDTH, MainMenu.MAIN_MENU_HEIGHT, new Color(255, 255, 255, 255), 0);
            drawText(this._title, [x, y - MainMenu.MENU_DRAW_OFFSET_Y * 1.4], new Color(), 1, [1, 1], true);
            y += (MainMenu.MAIN_MENU_HEIGHT / 2);
            if (Date.now() - MainMenu.CONTROL_TICK_TIME_MS > MainMenu.LAST_TICK_TIME) {
                if (mp.keys.isDown(40)) {
                    var menuInstance = MainMenu.MenuInstances[MainMenu.MenuInstances.length - 1];
                    menuInstance.setToItem(menuInstance.currentIndexMenuItems + 1);
                }
                else {
                    if (mp.keys.isDown(38)) {
                        var menuInstance = MainMenu.MenuInstances[MainMenu.MenuInstances.length - 1];
                        menuInstance.setToItem(menuInstance.currentIndexMenuItems - 1);
                    }
                }
            }
            _super.prototype.render.call(this, x, y);
        }
    };
    MainMenu.prototype.open = function () {
        this.isVisible = true;
    };
    MainMenu.prototype.close = function () {
        this.isVisible = false;
    };
    MainMenu.prototype.setResolutionRatio = function () {
        MainMenu.SCREEN_RATIO_WIDTH = 1024 / mp.game.graphics.getScreenActiveResolution(0, 0).x;
        MainMenu.SCREEN_RATIO_HEIGHT = 768 / mp.game.graphics.getScreenActiveResolution(0, 0).y;
        MainMenu.MENU_WIDTH = 0.27 * MainMenu.SCREEN_RATIO_WIDTH;
        MainMenu.MENU_WIDTH = Math.max(MainMenu.MENU_WIDTH, getTextWidth(this._title, 1, [1, 1]) + MainMenu.MENU_WIDTH / 5);
        MainMenu.MENU_HEIGHT = 0.04 * MainMenu.SCREEN_RATIO_HEIGHT;
        MainMenu.MAIN_MENU_HEIGHT = MainMenu.MENU_HEIGHT * 2.5;
        MainMenu.MENU_DRAW_OFFSET_X = MainMenu.MENU_WIDTH / 2;
        MainMenu.MENU_DRAW_OFFSET_Y = MainMenu.MENU_HEIGHT / 2;
        MainMenu.MENU_ARROW_DOWN_HEIGHT = MainMenu.MENU_HEIGHT / 3;
    };
    MainMenu.MAX_MENU_DISPLAY = 8;
    MainMenu.CONTROL_TICK_TIME_MS = 150;
    MainMenu.LAST_TICK_TIME = Date.now();
    MainMenu.MenuInstances = [];
    return MainMenu;
}(Menu));
