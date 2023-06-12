function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)

    const contacts = document.querySelectorAll('#contact-list > li > label')// seleciona todos os elementos
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const firstContact = document.querySelector ('#contact-list > li > label')//seleciona o primeiro elemento
    console.log(firstContact)
}
