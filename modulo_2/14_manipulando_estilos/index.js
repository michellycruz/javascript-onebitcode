function useLightTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)