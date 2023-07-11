let createHelloWorld = function(){
    return() => 'Hello World'
}

window.onload = function(){
    let createdOutput = document.getElementById('output')
    let helloWorld = createHelloWorld()
    createdOutput.innerHTML = helloWorld()
}