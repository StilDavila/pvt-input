import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PvtInput } from '../pvt-input.interface';

@Component({
  selector: 'app-pvt-mat-input',
  templateUrl: './pvt-mat-input.component.html',
  styleUrls: ['./pvt-mat-input.component.scss'],
})
export class PvtMatInputComponent implements OnInit {
  // @Input() type = 'text';
  // @Input() controlName: string = '';
  @Input() placeholder = '';
  @Input() isDisabled: boolean = false;
  @Input() hasPrefix: boolean = false;
  @Input() hasSuffix: boolean = false;
  @Input() hasHelpText: boolean = false;
  @Input() hasCountText: boolean = false;
  @Input() validators: PvtInput[] = [];

  @Input() control: FormControl = new FormControl();
  value: any;
  errorMessage: string = '';

  ngOnInit(): void {
    console.log(this.validators);
    console.log("disabled: ",this.isDisabled);
    
    this.control.addValidators(
      this.validators.map((validator: any) => validator.ngValidator)
    );

    if(this.isDisabled) this.control.disable();
    // if (this.control) {

    //   this.value = this.control.value;
    //   if (this.disabled) {
    //     this.disabled = this.control.disabled;
    //   }
    // }
    // console.log(this.control);
    // console.log(this.value);
  }

  hasError() {
    const hasError = this.validators.filter((validator) =>
      this.control.hasError(validator.name)
    );
    if (hasError.length > 0) {
      this.errorMessage = hasError[0].message;
      return true;
    }
    return false;
  }
}
