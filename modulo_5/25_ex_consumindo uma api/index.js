function createTransationContainer(id){
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

function createTransactionTitle(name){
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

function createTransactionAmount(amount){
    const span = documen.createElement('span')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formatedAmount = formater.format(amount)

    if (amount > 0){
        span.textContent = `${formatedAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('debit')
    }

    return span
}
