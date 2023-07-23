import {Component} from "./Component.js"
import {Form} from "./Form.js"
import {Input} from "./Input.js"
import {Label} from "./Label.js"

const title = new Component('h1', 'body', {textContent: 'Olá, mundo!'})
console.log(title)
title.render()

title.tag = 'h3'
title.build().render()