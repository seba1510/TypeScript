import {Field} from './Field';
import {FieldLabel} from './FieldLabel';
import {FieldType} from './FieldType';

export class InputField implements Field {
    name: string;
    label: string;
    type = FieldType.TextField;
    value: any;
  
    render(parentElement: HTMLElement) {
        const label = new FieldLabel().render(this.label);
        const input = document.createElement('input');
        parentElement.appendChild(label);
        parentElement.appendChild(input);
  
        return parentElement;
    }
  
    getValue(element: HTMLElement) {
        return element.nodeValue;
    }
    
  }