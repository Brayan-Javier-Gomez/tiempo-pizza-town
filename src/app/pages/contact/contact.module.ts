import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { LottieModule } from 'ngx-lottie';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule, 
    LottieModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
