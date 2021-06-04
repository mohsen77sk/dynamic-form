export interface IFieldOption {
  id: number;
  name: string;
}

export interface IFieldValidator {
  type:
    | 'required'
    | 'email'
    | 'pattern'
    | 'minLength'
    | 'maxLength'
    | 'min'
    | 'max';
  message: string;
  validator?: any;
}

export interface IFieldConfig {
  type: 'date' | 'input' | 'select' | 'checkbox' | 'button';
  inputType?: string;
  name?: string;
  label?: string;
  value?: string | number | boolean;
  url?: string;
  options?: IFieldOption[];
  validations?: IFieldValidator[];
  class?: string[];
}

export interface ISectionConfig {
  class?: string[];
  fields?: IFieldConfig[];
  sections?: ISectionConfig[];
}

export interface IFormConfig {
  sections?: ISectionConfig[];
}
