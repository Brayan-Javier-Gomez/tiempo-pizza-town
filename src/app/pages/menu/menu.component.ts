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

}