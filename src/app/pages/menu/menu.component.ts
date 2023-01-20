import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectCoverflow} from "swiper";

SwiperCore.use([EffectCoverflow]);


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class MenuComponent {

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x!.className === "topnav") {
      x!.className += " responsive";
    } else {
      x!.className = "topnav";
    }
  }

}