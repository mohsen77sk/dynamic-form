import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFieldConfig } from '@lib/types/config.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent {
  field!: IFieldConfig;
  group!: FormGroup;

  /**
   * constructor
   */
  constructor() {}
}
