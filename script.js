class FormElement extends HTMLElement {
    connectedCallback() {
        const type = this.getAttribute('type');
        const placeholder = this.getAttribute('placeholder');
        const label = this.getAttribute('label');

        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('placeholder', placeholder);
        input.classList.add('form-control');

        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        formGroup.appendChild(input);

        const labelElement = document.createElement('label');
        labelElement.textContent = label;

        formGroup.appendChild(labelElement);

        this.appendChild(formGroup);
    }
}

customElements.define('form-element', FormElement);
