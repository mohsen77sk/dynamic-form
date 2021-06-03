import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFieldConfig } from '@lib/types/config.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  field!: IFieldConfig;
  group!: FormGroup;

  /**
   * constructor
   */
  constructor() {}
}
