import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ISectionConfig } from '@lib/types/config.interface';

@Component({
  selector: 'dynamic-section',
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class]': 'config.class' },
})
export class DynamicSectionComponent {
  @Input() config!: ISectionConfig;
  @Input() group!: FormGroup;

  /**
   * constructor
   */
  constructor() {}
}
