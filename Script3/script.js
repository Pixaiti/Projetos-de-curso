window.onload = function () {
    let s1 = ''
    let s2 = ''

    while (!s1 || s1 == '') {
        s1 = window.prompt('Digite um número')
    }
    while (!s2 || s2.trim == '') {
        s2 = window.prompt('Digite outro número')
    } 

    let n1 = Number(s1)
    let n2 = Number(s2)

    let soma = n1 + n2
    
    document.getElementById("title").innerText = `O resultado é: ${String(soma)}`
}