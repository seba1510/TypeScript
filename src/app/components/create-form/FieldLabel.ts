export class FieldLabel {
    render(label: string): HTMLElement {
        const strong = document.createElement('strong');
        strong.innerHTML = label;
        return strong;
    } 
  }