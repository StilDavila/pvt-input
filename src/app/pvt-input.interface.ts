import { AbstractControlOptions, ValidationErrors, ValidatorFn } from "@angular/forms";

export interface PvtInput{
  ngValidator: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null | undefined | unknown | any;
  message: string;
  name: string;
}