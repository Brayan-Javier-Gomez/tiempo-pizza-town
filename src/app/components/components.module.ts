import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuMobileModule } from './menu-mobile/menu-mobile.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MenuMobileModule,
    MenuModule
], 
exports: [
    MenuMobileModule,
    MenuModule
  ]
})
export class ComponentsModule { }
