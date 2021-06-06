import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FormBuilderService } from './form-builder.service';
import { FormBuilderComponent } from './form-builder.component';
import { SectionComponent } from './section/section.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [FormBuilderComponent, SectionComponent, FieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  providers: [FormBuilderService],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {}
