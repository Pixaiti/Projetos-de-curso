window.onload = function(){
    let nome
    while (!nome || nome.trim() == '') {
        nome = window.prompt("Qual o seu nome?")
    }

    document.getElementById('title').innerText = `Olá, ${nome}!`
    document.getElementById('qntd').innerText = `Seu nome têm ${nome.trim().length} letras.`
    document.getElementById('uc').innerText = `${nome.toUpperCase()}. Este é seu nome em letra maiúsculas`
    document.getElementById('lc').innerText = `${nome.toLowerCase()}. Este é seu nome em letras minúsculas`
}