import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { FormBuilderService } from '../form-builder.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  classList: string[] = [];

  @Input() InputForm!: FormGroup | AbstractControl;
  @Input() InputIndexForm: number = 0;

  get form(): FormGroup {
    return this.InputForm as FormGroup;
  }

  get sections(): FormArray {
    return this.form.get('sections') as FormArray;
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  /**
   * constructor
   *
   * @param fbService service
   */
  constructor(private fbService: FormBuilderService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * onInit
   */
  ngOnInit(): void {
    this.classList = this.form.get('class')?.value;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * create section
   */
  createSection() {
    (this.form.get('sections') as FormArray).push(
      this.fbService.createSection()
    );
  }

  /**
   * create field
   */
  createField() {
    (this.form.get('fields') as FormArray).push(this.fbService.createField());
  }

  /**
   * remove current section
   */
  removeFrom() {
    (this.form.parent as FormArray)?.removeAt(this.InputIndexForm);
  }

  /**
   * add to class list
   *
   * @param event event
   */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.classList.push(value);
      this.updateClass();
    }
    event.chipInput!.clear();
  }

  /**
   * remove from class list
   *
   * @param item value
   */
  remove(item: string): void {
    const index = this.classList.indexOf(item);
    if (index >= 0) {
      this.classList.splice(index, 1);
      this.updateClass();
    }
  }

  /**
   * update class
   */
  updateClass(): void {
    this.form.get('class')?.setValue(this.classList);
  }
}
