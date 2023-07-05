function label(attributes){
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
}

function input(attributes){
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

function br(){
    const element = document.createElement('br')
    return element
}

console.log(label({for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({id: 'fullname', name: 'fullname', placeholder: 'Digiteseu nome completo...'}))
console.log(br())