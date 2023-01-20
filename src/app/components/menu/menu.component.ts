import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuCollapse = false;

  options: AnimationOptions = {
    path: '../../../../assets/animations/whatsapp.json',
  };

  menu_options = [
    {
      name: 'Home',
      url: 'home',
      image: '../../../../assets/icons/menu.svg'
    },
    {
      name: 'About us',
      url: 'about',
      image: '../../../../assets/icons/menu.svg'
    },
    {
      name: 'Menu',
      url: 'menu',
      image: '../../../../assets/icons/menu.svg'
    },
    {
      name: 'Contact',
      url: 'contact',
      image: '../../../../assets/icons/menu.svg'
    },
  ];

  showMenu() {
    this.menuCollapse = !this.menuCollapse;
  }
}
