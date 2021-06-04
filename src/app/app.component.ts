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
    sections: [
      {
        class: ['grid', 'shadow', 'overflow-hidden', 'rounded-md'],
        sections: [
          {
            class: ['px-4', 'py-5', 'bg-white', 'sm:p-6'],
            sections: [
              {
                class: ['grid', 'grid-cols-6', 'gap-6'],
                sections: [
                  {
                    class: ['col-span-6', 'sm:col-span-3'],
                    fields: [
                      {
                        type: 'input',
                        inputType: 'text',
                        label: 'نام',
                        class: ['block', 'w-full'],
                      },
                    ],
                  },
                  {
                    class: ['col-span-6', 'sm:col-span-3'],
                    fields: [
                      {
                        type: 'input',
                        inputType: 'text',
                        label: 'فامیلی',
                        class: ['block', 'w-full'],
                      },
                    ],
                  },
                  {
                    class: ['col-span-6', 'sm:col-span-3'],
                    fields: [
                      {
                        type: 'select',
                        inputType: 'select',
                        label: 'کشور',
                        options: [
                          { id: 1, name: 'ایران' },
                          { id: 2, name: 'خارج' },
                        ],
                        class: ['block', 'w-full'],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            class: ['px-4', 'py-3', 'bg-gray-50', 'flex', 'justify-end'],
            fields: [
              {
                type: 'button',
                inputType: 'rest',
                label: 'ریست',
                class: ['mx-1'],
              },
              {
                type: 'button',
                inputType: 'submit',
                label: 'ارسال',
                class: ['mx-1'],
              },
            ],
          },
        ],
      },
    ],
  };

  /**
   * constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * submit
   *
   * @param event event
   */
  onSubmit(event: any): void {
    console.log(event);
  }
}
