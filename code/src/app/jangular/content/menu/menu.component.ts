import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MenuService } from './../../services/menu.service';

@Component({
  selector: 'japp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  @Input() menuType;
  shouldRun = true;
  menus;
  constructor(private _menuService: MenuService) {
  }

  ngOnInit(): void {

    this._menuService.getMenus(this.menuType).subscribe(mainMenuData => {
      console.log('this is main menu data ', mainMenuData);
      this.menus = mainMenuData['data'];
    });

  }

}
