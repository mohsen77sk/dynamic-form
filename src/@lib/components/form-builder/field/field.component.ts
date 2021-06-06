import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

import {
  dateType,
  inputType,
  selectType,
  checkboxType,
  buttonType,
} from './const';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FieldComponent implements OnInit, OnChanges {
  @Input() InputForm!: FormGroup | AbstractControl;
  @Input() InputIndexForm: number = 0;

  inputTypeList: any[] = [];

  get form(): FormGroup {
    return this.InputForm as FormGroup;
  }

  /**
   * constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * onInit
   */
  ngOnInit(): void {}

  /**
   * onChange
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.changeType();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * remove current field
   */
  removeFrom() {
    (this.form.parent as FormArray)?.removeAt(this.InputIndexForm);
  }

  /**
   * change type -> load input type list
   */
  changeType() {
    switch (this.form.get('type')?.value) {
      case 'input':
        this.inputTypeList = inputType;
        break;
      case 'date':
        this.inputTypeList = dateType;
        break;
      case 'select':
        this.inputTypeList = selectType;
        break;
      case 'checkbox':
        this.inputTypeList = checkboxType;
        break;
      case 'button':
        this.inputTypeList = buttonType;
        break;

      default:
        this.inputTypeList = [];
        break;
    }
  }
}
