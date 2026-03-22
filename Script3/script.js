window.onload = function () {
    const n1 = Number(window.prompt('Digite um número'))
    const n2 = Number(window.prompt('Digite outro número'))  
    let soma = n1 + n2
    
    document.getElementById("title").innerText = `O resultado é: ${String(soma)}`
}