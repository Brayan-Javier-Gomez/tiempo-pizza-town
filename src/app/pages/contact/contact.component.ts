import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formContac= new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
      ),
    ]),
    message: new FormControl("", [
      Validators.required,
    ]),
  });
}
