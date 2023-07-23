import { Componet } from "./Component.js";

export class Form extends Componet {
    constructor(parent, options){
        super('form', parent, options)
    }
    addChildren(...children){
        children.forEach(child => {
            this.getElement().appendChild(child.getElement())
        })
    }
}