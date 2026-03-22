window.onload = function () {
    const nome = window.prompt("Qual o seu nome?")

    document.getElementById("title").innerText = `Olá, ${nome}!`
}