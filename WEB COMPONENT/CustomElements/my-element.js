const template = document.createElement('div');
template.innerHTML = `
<style>
    .texto{
        color:purple;
    }
    p{
        color:green;
    }
</style>
<p class="texto">Hola Mundo 2</p>
<p>Holi ombe ombe</p>
`;
class myElement extends HTMLElement {
    constructor(){
        super();
        this.p = document.createElement('p');
    }
    connectedCallback(){
        this.p.textContent = "Hola Mundo!!!";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}
customElements.define('my-element', myElement);