import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { LottieModule } from 'ngx-lottie';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [ContactComponent,HeaderComponent],
  imports: [
    CommonModule,
    ContactRoutingModule, 
    LottieModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
