import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable()
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}

  createDefaultValue(): FormGroup {
    const group = this.fb.group({
      class: new FormControl([]),
      fields: new FormArray([]),
      sections: new FormArray([]),
    });
    (group.get('sections') as FormArray)?.push(
      this.fb.group({
        class: new FormControl(['row']),
        fields: new FormArray([]),
        sections: new FormArray([
          this.fb.group({
            class: new FormControl(['col-sm-6']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('input'),
                inputType: new FormControl('text'),
                name: new FormControl('fName'),
                label: new FormControl('نام'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-sm-6']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('input'),
                inputType: new FormControl('text'),
                name: new FormControl('lName'),
                label: new FormControl('فامیلی'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-sm-12', 'col-md-6']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('input'),
                inputType: new FormControl('number'),
                name: new FormControl('postalCode'),
                label: new FormControl('کدپستی'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-md-6']),
            fields: new FormArray([]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-md-4', 'col-xl-2']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('select'),
                inputType: new FormControl('number'),
                name: new FormControl('country'),
                label: new FormControl('کشور'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(
                  '[{ "id": "1", "name": "ایران" },{ "id": "2", "name": "خارج" }]'
                ),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-md-4', 'col-xl-2']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('input'),
                inputType: new FormControl('text'),
                name: new FormControl('province'),
                label: new FormControl('استان'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-md-4', 'col-xl-2']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('input'),
                inputType: new FormControl('text'),
                name: new FormControl('city'),
                label: new FormControl('شهر'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
          this.fb.group({
            class: new FormControl(['col-12']),
            fields: new FormArray([
              this.fb.group({
                type: new FormControl('input'),
                inputType: new FormControl('text'),
                name: new FormControl('address'),
                label: new FormControl('آدرس'),
                value: new FormControl(),
                url: new FormControl(),
                options: new FormControl(),
                validations: new FormControl(),
                class: new FormControl(['w-100']),
              }),
            ]),
            sections: new FormArray([]),
          }),
        ]),
      })
    );

    (group.get('sections') as FormArray)?.push(
      this.fb.group({
        class: new FormControl(['d-flex', 'justify-content-end']),
        fields: new FormArray([
          this.fb.group({
            type: new FormControl('button'),
            inputType: new FormControl('reset'),
            name: new FormControl(),
            label: new FormControl('ریست'),
            value: new FormControl(),
            url: new FormControl(),
            options: new FormControl(),
            validations: new FormControl(),
            class: new FormControl(['mx-1']),
          }),
          this.fb.group({
            type: new FormControl('button'),
            inputType: new FormControl('submit'),
            name: new FormControl(),
            label: new FormControl('ارسال'),
            value: new FormControl(),
            url: new FormControl(),
            options: new FormControl(),
            validations: new FormControl(),
            class: new FormControl(['mx-1']),
          }),
        ]),
        sections: new FormArray([]),
      })
    );
    return group;
  }

  /**
   * create section
   *
   * @returns form
   */
  createSection(): FormGroup {
    const group = this.fb.group({
      class: new FormControl([]),
      fields: new FormArray([]),
      sections: new FormArray([]),
    });
    return group;
  }

  /**
   * create field
   *
   * @returns form
   */
  createField(): FormGroup {
    const group = this.fb.group({
      type: new FormControl(),
      inputType: new FormControl(),
      name: new FormControl(),
      label: new FormControl(),
      value: new FormControl(),
      url: new FormControl(),
      options: new FormControl(),
      validations: new FormControl(),
      class: new FormControl([]),
    });
    return group;
  }
}
