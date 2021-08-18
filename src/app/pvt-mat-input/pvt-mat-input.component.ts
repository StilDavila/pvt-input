import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pvt-mat-input',
  templateUrl: './pvt-mat-input.component.html',
  styleUrls: ['./pvt-mat-input.component.scss'],
})
export class PvtMatInputComponent implements OnInit {
  @Input() maxlength: number = 20;
  @Input() minlength: number = 1;
  @Input() type = 'text';
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() placeholder = '';
  @Input() disabled: boolean = false;
  @Input() hasPrefix: boolean = false;
  @Input() hasSuffix: boolean = false;

  @Input() control: FormControl = new FormControl();
  value: any;

  ngOnInit(): void {
    if (this.control) {
      
      this.value = this.control.value;
      if (this.disabled) {
        this.disabled = this.control.disabled;
      }
    }
    console.log(this.control);
    console.log(this.value);
    
  }
}
