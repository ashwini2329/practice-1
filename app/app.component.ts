import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Practice ,Practice & Practice';
  public enteredObject: {} = {};

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]),
  });

  onSubmit() {
    this.enteredObject = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
    };
    console.log(JSON.stringify(this.enteredObject));
  }

  // Method to check if the object has any data
  hasData(obj: {}): boolean {
    return Object.keys(obj).length > 0;
  }
}
