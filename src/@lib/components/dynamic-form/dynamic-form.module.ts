import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { DateComponent } from './dynamic-field/fields/date/date.component';
import { InputComponent } from './dynamic-field/fields/input/input.component';
import { SelectComponent } from './dynamic-field/fields/select/select.component';
import { CheckboxComponent } from './dynamic-field/fields/checkbox/checkbox.component';
import { ButtonComponent } from './dynamic-field/fields/button/button.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicSectionComponent,
    DynamicFieldDirective,
    DateComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
