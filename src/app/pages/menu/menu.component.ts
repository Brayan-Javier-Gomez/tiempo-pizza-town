import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, EffectCards, EffectCoverflow} from "swiper";

SwiperCore.use([Autoplay, Navigation, EffectCards, EffectCoverflow]);


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class MenuComponent {

}
