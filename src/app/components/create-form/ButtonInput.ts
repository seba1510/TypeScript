 export class ButtonInput {
    render(parentElement: HTMLElement) {
        const button = document.createElement('button');
        button.setAttribute('id','btn');
        button.setAttribute('type','submit');
        button.innerHTML = "Wyślij";
        parentElement.appendChild(button);

        const buttton = document.createElement('button');
        buttton.setAttribute('id','btnn');
        buttton.setAttribute('type','exit');
        buttton.innerHTML = "Cofnij";
        parentElement.appendChild(buttton);

        return parentElement;
    }

}