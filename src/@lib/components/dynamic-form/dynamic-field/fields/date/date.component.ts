import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFieldConfig } from '@lib/types/config.interface';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DateComponent {
  field!: IFieldConfig;
  group!: FormGroup;

  /**
   * constructor
   */
  constructor() {}
}
