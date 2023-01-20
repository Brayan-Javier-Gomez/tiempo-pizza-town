import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  options: AnimationOptions = {
    path: '../../../assets/animations/pizza-box.json',
  };
  optionsLogo: AnimationOptions = {
    path: '../../../assets/animations/pizza.json',
  };
}
