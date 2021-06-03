import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { IFieldConfig, IFieldOption } from '@lib/types/config.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {
  field!: IFieldConfig;
  group!: FormGroup;

  list!: IFieldOption[];

  /**
   * constructor
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * onInit
   */
  ngOnInit(): void {
    if (this.field.options) {
      this.list = this.field.options;
    } else {
      this.http.get(`${this.field.url}`).subscribe((response: any) => {
        this.list = response;
      });
    }
  }
}
