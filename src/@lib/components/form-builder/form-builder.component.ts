import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilderService } from './form-builder.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormBuilderComponent implements OnInit {
  @Output() submit: EventEmitter<any>;

  form!: FormGroup;

  get value() {
    return this.form.value;
  }

  /**
   * constructor
   *
   * @param fbService service
   */
  constructor(private fbService: FormBuilderService) {
    // Set the defaults
    this.submit = new EventEmitter();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * onInit
   */
  ngOnInit(): void {
    this.form = this.createForm();
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
    return this.fbService.createDefaultValue();
  }

  /**
   * @private
   * Validate all fields of form
   *
   * @param formGroup form
   */
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.updateValueAndValidity({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        (control as FormArray).controls.forEach((f) => {
          this.validateAllFormFields(f as FormGroup);
        });
      }
    });
  }
}
