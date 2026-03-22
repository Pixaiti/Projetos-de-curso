window.onload = function () {
    const n1 = Number.parseFloat(window.prompt('Digite um número'))
    const n2 = Number.parseFloat(window.prompt('Digite outro número'))  
    
    document.getElementById("title").innerText = `O resultado é: ${n1 + n2}`
}