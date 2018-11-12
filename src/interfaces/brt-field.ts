import { BrtFieldType } from './../enums/brt-field-type';

export interface BrtField {
  id?: string;
  label: string;
  type: BrtFieldType;
  required?: boolean;
  value?: any;
}
