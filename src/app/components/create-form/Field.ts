import {FieldType} from './FieldType';
export interface Field{
    name: string;
    label: string;
    type: FieldType;
    value: any;
    render(parentElement: HTMLElement): HTMLElement;
    getValue(element: HTMLElement): any;
  }