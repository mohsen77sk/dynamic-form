import {
  ComponentFactoryResolver,
  Directive,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFieldConfig } from '@lib/types/config.interface';

import { DateComponent } from './fields/date/date.component';
import { InputComponent } from './fields/input/input.component';
import { SelectComponent } from './fields/select/select.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { ButtonComponent } from './fields/button/button.component';

const componentMapper = {
  date: DateComponent,
  input: InputComponent,
  select: SelectComponent,
  checkbox: CheckboxComponent,
  button: ButtonComponent,
};

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective {
  componentRef: any;

  @Input() field!: IFieldConfig;
  @Input() group!: FormGroup;

  /**
   * constructor
   *
   * @param resolver ComponentFactoryResolver
   * @param container ViewContainerRef
   */
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * onInit
   */
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
