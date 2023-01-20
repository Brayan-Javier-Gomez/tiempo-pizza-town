import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SwiperModule
  ]
})
export class MenuModule { }