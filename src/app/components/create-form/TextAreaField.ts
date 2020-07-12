import {Field} from './Field';
import {FieldType} from './FieldType';
import {FieldLabel} from './FieldLabel';

export class TextAreaField implements Field {
    name: string;
    label: string;
    type: FieldType.MultiLineTextField;
    value: any;
  
    render(parentElement: HTMLElement) {
        const textAreaLabel = new FieldLabel().render(this.label);
        const textAreaInput = document.createElement('textarea');
  
        parentElement.appendChild(textAreaLabel);
        parentElement.appendChild(textAreaInput);
  
        return parentElement;
    }
  
    getValue(element: HTMLElement) {
        return this.value;
    }
  
  }