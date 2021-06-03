import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChange,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import {
  IFormConfig,
  IFieldConfig,
  IFieldValidator,
  ISectionConfig,
} from '@lib/types/config.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicFormComponent implements OnChanges {
  @Input() config!: IFormConfig;

  @Output() submit: EventEmitter<any>;

  form!: FormGroup;

  get value() {
    return this.form.value;
  }

  /**
   * constructor
   *
   * @param fb FormBuilder
   */
  constructor(private fb: FormBuilder) {
    // Set the defaults
    this.submit = new EventEmitter();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * onChanges
   */
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      const changedProp = changes[propName];
      if (changedProp.currentValue) {
        this.form = this.createForm();
      }
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * submit form
   *
   * @param event event
   */
  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * @private
   * create form
   *
   * @returns form
   */
  private createForm(): FormGroup {
    const group = this.fb.group({});
    if (this.config.sections) this.createControls(this.config.sections, group);
    return group;
  }

  /**
   * @private
   * create controls to form
   *
   * @param sections sections to create controls
   * @param form form
   */
  private createControls(sections: ISectionConfig[], form: FormGroup) {
    sections.forEach((row) => {
      row.fields?.forEach((field) => {
        this.createControl(field, form);
      });
      if (row.sections) this.createControls(row.sections, form);
    });
  }

  /**
   * @private
   * create control to form
   *
   * @param field field to create control
   * @param form form
   */
  private createControl(field: IFieldConfig, form: FormGroup): void {
    if (field.type === 'button') {
      return;
    }
    const control = this.fb.control(
      field.value,
      this.bindValidations(field.validations || [])
    );
    form.addControl(field.name ?? '', control);
  }

  /**
   * @private
   * compose validation
   *
   * @param validations list of validation
   * @returns Validator
   */
  private bindValidations(validations: IFieldValidator[]): ValidatorFn | null {
    if (validations.length > 0) {
      const validList: any[] = [];
      validations.forEach((valid) => {
        switch (valid.type) {
          case 'required':
            validList.push(Validators.required);
            break;
          case 'email':
            validList.push(Validators.email);
            break;
          case 'pattern':
            validList.push(Validators.pattern(valid.validator));
            break;
          case 'minLength':
            validList.push(Validators.minLength(parseInt(valid.validator)));
            break;
          case 'maxLength':
            validList.push(Validators.maxLength(parseInt(valid.validator)));
            break;
          case 'min':
            validList.push(Validators.min(parseInt(valid.validator)));
            break;
          case 'max':
            validList.push(Validators.max(parseInt(valid.validator)));
            break;
        }
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /**
   * @private
   * Validate all fields of form
   *
   * @param formGroup form
   */
  private validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
      control?.updateValueAndValidity({ onlySelf: true });
    });
  }
}
