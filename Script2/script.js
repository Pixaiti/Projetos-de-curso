window.onload = function () {
    const nome = window.prompt("Qual o seu nome?")
    if (nome == null) {
        document.getElementById("title").innerText = `Olá, Jhon Sem Nome!`
    }
    else if (nome.trim() == ''){
        document.getElementById("title").innerText = `Olá, Jhon Sem Nome!`
    }
    else{
        document.getElementById("title").innerText = `Olá, ${nome}!`
    }
}