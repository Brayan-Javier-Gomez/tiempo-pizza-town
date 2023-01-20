import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMobileComponent } from './menu-mobile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuMobileComponent],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    MenuMobileComponent
  ]
})
export class MenuMobileModule { }
