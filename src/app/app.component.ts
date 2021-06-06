import { Component } from '@angular/core';

import { IFormConfig } from '@lib/types/config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //
  config: IFormConfig = {
    // sections: [
    //   {
    //     class: ['row'],
    //     sections: [
    //       {
    //         class: ['col-sm-6'],
    //         fields: [
    //           {
    //             type: 'input',
    //             inputType: 'text',
    //             name: 'fName',
    //             label: 'نام',
    //             class: ['w-100'],
    //             validations: [
    //               { type: 'required', message: 'این فیلد اجباری است' },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         class: ['col-sm-6'],
    //         fields: [
    //           {
    //             type: 'input',
    //             inputType: 'text',
    //             name: 'lName',
    //             label: 'فامیلی',
    //             class: ['w-100'],
    //             validations: [
    //               { type: 'required', message: 'این فیلد اجباری است' },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         class: ['col-sm-12', 'col-md-6'],
    //         fields: [
    //           {
    //             type: 'input',
    //             inputType: 'number',
    //             name: 'postalCode',
    //             label: 'کدپستی',
    //             class: ['w-100'],
    //             validations: [
    //               {
    //                 type: 'maxLength',
    //                 validator: 10,
    //                 message: 'کد پستی وارد شده، صحیح نیست',
    //               },
    //               {
    //                 type: 'minLength',
    //                 validator: 10,
    //                 message: 'کد پستی وارد شده، صحیح نیست',
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         class: ['col-md-6'],
    //       },
    //       {
    //         class: ['col-md-4', 'col-xl-2'],
    //         fields: [
    //           {
    //             type: 'select',
    //             inputType: 'select',
    //             name: 'country',
    //             label: 'کشور',
    //             options: [
    //               { id: 1, name: 'ایران' },
    //               { id: 2, name: 'خارج' },
    //             ],
    //             class: ['w-100'],
    //           },
    //         ],
    //       },
    //       {
    //         class: ['col-md-4', 'col-xl-2'],
    //         fields: [
    //           {
    //             type: 'input',
    //             inputType: 'text',
    //             name: 'province',
    //             label: 'استان',
    //             class: ['w-100'],
    //           },
    //         ],
    //       },
    //       {
    //         class: ['col-md-4', 'col-xl-2'],
    //         fields: [
    //           {
    //             type: 'input',
    //             inputType: 'text',
    //             name: 'city',
    //             label: 'شهر',
    //             class: ['w-100'],
    //           },
    //         ],
    //       },
    //       {
    //         class: ['col-12'],
    //         fields: [
    //           {
    //             type: 'input',
    //             inputType: 'text',
    //             name: 'address',
    //             label: 'آدرس',
    //             class: ['w-100'],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     class: ['d-flex', 'justify-content-end'],
    //     fields: [
    //       {
    //         type: 'button',
    //         inputType: 'reset',
    //         label: 'ریست',
    //         class: ['mx-1'],
    //       },
    //       {
    //         type: 'button',
    //         inputType: 'submit',
    //         label: 'ارسال',
    //         class: ['mx-1'],
    //       },
    //     ],
    //   },
    // ],
  };

  result: any;

  /**
   * constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * set new config
   *
   * @param event event
   */
  setConfig(event: any): void {
    this.config = event;
  }

  /**
   * submit
   *
   * @param event event
   */
  onSubmit(event: any): void {
    this.result = JSON.stringify(event);
  }
}
