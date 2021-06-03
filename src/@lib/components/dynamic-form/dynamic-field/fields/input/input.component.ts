import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFieldConfig } from '@lib/types/config.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  field!: IFieldConfig;
  group!: FormGroup;

  /**
   * constructor
   */
  constructor() {}
}
