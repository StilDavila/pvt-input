import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PvtInput } from './pvt-input.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crudTwitch';
  validators: PvtInput[] = [
    {
      ngValidator: Validators.required,
      message: 'requerido',
      name: 'required',
    },
    {
      ngValidator: Validators.email,
      message: 'debe ser un email',
      name: 'email',
    },
    {
      ngValidator: Validators.minLength(5),
      message: 'minimo 5 caracteres',
      name: 'minlength',
    },
  ];

  emailFormControl = new FormControl('');

  constructor() {
    // console.log(this.validators.map((validator: any) => validator.ngValidator));
    // console.log('----');
    // console.log([
    //   Validators.required,
    //   Validators.email,
    //   Validators.maxLength(10),
    //   Validators.minLength(5),
    // ]);
    // this.emailFormControl.addValidators(this.validators.map((validator: any) => validator.ngValidator))
  }
}
