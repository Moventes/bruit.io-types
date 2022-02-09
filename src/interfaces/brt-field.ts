import { BrtFieldType } from './../enums/brt-field-type';

export interface BrtField {
  id?: string;
  label: string;
  type:
    | BrtFieldType
    | 'checkbox'
    | 'textarea'
    | 'email'
    | 'text'
    | 'rating'
    | 'select';
  required?: boolean;
  value?: any;
  max?: number;
  options?: string[];
}
