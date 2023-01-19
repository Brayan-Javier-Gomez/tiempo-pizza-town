import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionComponent } from './menu-option.component';



@NgModule({
  declarations: [MenuOptionComponent],
  imports: [
    CommonModule,
  ], 
  exports: [
    MenuOptionComponent
  ]
})
export class MenuOptionModule { }
