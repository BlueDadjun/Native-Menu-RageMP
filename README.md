# Native Menu RageMP
![https://i.imgur.com/T1esInV.png](https://i.imgur.com/T1esInV.png)
## MainMenu
```new MainMenu(title: string)```

### Functions
* ```add(menuItem: MenuItem)```
* ```render(x: number, y: number)```
* ```open()```
* ```close()```

### Events
* ```setEventMenu(eventMenu: EventMenu)```

## TextMenuItem
```new TextMenuItem(displayText: string, data: any, caption: string = "", badge: MenuBadge = NaN, textColor: Color = new Color(255, 255, 255, 240), backgroundColor: Color = new Color(0, 0, 0, 120), hoverTextColor: Color = new Color(0, 0, 0, 240), hoverBackgroundColor: Color = new Color(255, 255, 255, 170))```

### Events
* ```addOnClickEvent(onClickEvent: OnClickItemMenuEvent)```
* ```addOnSelectEvent(onSelectEvent: OnSelectItemMenuEvent)```

## CheckboxMenuItem
```new CheckboxMenuItem(displayText: string, data: boolean = false, caption: string = "", badge: MenuBadge = NaN, textColor: Color = new Color(255, 255, 255, 240), backgroundColor: Color = new Color(0, 0, 0, 120), hoverTextColor: Color = new Color(0, 0, 0, 240), hoverBackgroundColor: Color = new Color(255, 255, 255, 170))```

### Events
* ```addOnClickEvent(onClickEvent: OnClickItemMenuEvent)```
* ```addOnSelectEvent(onSelectEvent: OnSelectItemMenuEvent)```

## ListMenuItem
```new ListMenuItem(displayText: string, data: any[], caption: string = "", badge: MenuBadge = NaN, textColor: Color = new Color(255, 255, 255, 240), backgroundColor: Color = new Color(0, 0, 0, 120), hoverTextColor: Color = new Color(0, 0, 0, 240), hoverBackgroundColor: Color = new Color(255, 255, 255, 170))```

### Events
* ```addOnChangeEvent(onChangeEvent: OnChangeItemMenuEvent)```
* ```addOnClickEvent(onClickEvent: OnClickItemMenuEvent)```
* ```addOnSelectEvent(onSelectEvent: OnSelectItemMenuEvent)```

## SliderMenuItem
```new SliderMenuItem(displayText: string, min: number, max: number, step: number, data: number = NaN, caption: string, badge: MenuBadge, textColor: Color, backgroundColor: Color, hoverTextColor: Color, hoverBackgroundColor: Color)```

### Events
* ```addOnChangeEvent(onChangeEvent: OnChangeItemMenuEvent)```
* ```addOnClickEvent(onClickEvent: OnClickItemMenuEvent)```
* ```addOnSelectEvent(onSelectEvent: OnSelectItemMenuEvent)```

## CloseMenuItem
```new CloseMenuItem(displayText: string = "Close")```

## SubMenuItem
```new SliderMenuItem(displayText: string, min: number, max: number, step: number, data: number = NaN, caption: string, badge: MenuBadge, textColor: Color, backgroundColor: Color, hoverTextColor: Color, hoverBackgroundColor: Color)```

### Functions
* ```add(menuItem: MenuItem)```

# Example
```
let menu = new MainMenu("Native Menu");
let textMenuItem = new TextMenuItem("Text menu item", "corresponding data");
textMenuItem.addOnClickEvent({
    trigger: data => {
        mp.gui.chat.push("Click "+ data);
    }
});
textMenuItem.addOnSelectEvent({
    trigger: data => {
        mp.gui.chat.push("Select "+ data);
    }
});
menu.add(textMenuItem);

menu.add(new TextMenuItem("Caption", "corresponding data", "My Lorem ipsum dolor sit amet caption"));

let sliderMenuItem = new SliderMenuItem("Slider menu item", 0, 15, 1, 7);
sliderMenuItem.addOnChangeEvent({
    trigger: data => {
        mp.gui.chat.push("change "+ data);
    }
});
menu.add(sliderMenuItem);

menu.add(new CheckboxMenuItem("Checkbox false", false));
menu.add(new CheckboxMenuItem("Checkbox true", true));

let listMenuItem = new ListMenuItem("List Menu", [{DisplayText: "AAA", customField: "Jump"}, {DisplayText: "BBB", otherCustomField: "Jump"}], 0);
listMenuItem.addOnChangeEvent({
    trigger: data => {
        mp.gui.chat.push("change "+ JSON.stringify(data));
    }
});
menu.add(listMenuItem);

menu.add(new TextMenuItem("Badge Text menu item", "my data", "my caption", MenuBadge.SHOP_AMMO));

let subMenuItem = new SubMenuItem("Sub menu item 1");
let subMenuTextMenuItem = new TextMenuItem("First sub menu item", "my data");
subMenuTextMenuItem.addOnClickEvent({
    trigger: data => {
        mp.gui.chat.push("click "+ data);
    }
});
subMenuItem.add(subMenuTextMenuItem); /* add subMenuTextMenuItem to the submenu */
menu.add(subMenuItem); /** add submenu to the mainmenu */

mp.events.add("render", () => menu.render(0.1, 0.1));
```
