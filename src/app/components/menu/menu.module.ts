import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { LottieModule } from 'ngx-lottie';
import { MenuMobileModule } from '../menu-mobile/menu-mobile.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    LottieModule,
    MenuMobileModule
  ], 
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
