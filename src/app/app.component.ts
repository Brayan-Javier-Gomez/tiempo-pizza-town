import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  itemsMenu = [
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
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x!.className === "topnav") {
      x!.className += " responsive";
    } else {
      x!.className = "topnav";
    }
  }
}
