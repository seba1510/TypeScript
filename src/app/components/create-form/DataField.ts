import {Field} from './Field';
import {FieldType} from './FieldType';
import {FieldLabel} from './FieldLabel';


export class DateField implements Field {
    public name: string;
    public label: string;
    public type: FieldType.Date;
    public value: any;
  
    render(parentElement: HTMLElement) {
        const dateField = new FieldLabel().render(this.label);
        parentElement.appendChild(dateField);
  
        return parentElement;
    }
  
    getDate = (): string => `${new Date().toLocaleString()}`
  
    getValue(element: HTMLElement) {
        return element.nodeValue;
    }
  
  }