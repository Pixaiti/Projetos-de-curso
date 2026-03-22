window.onload = function(){
    let salario = ''
    while (!salario || salario.trim() == ''){
        salario = window.prompt('Qual o seu salário?')
    }

    salario = salario.replace(',', '.')

    let salarioNumber = Number(salario)
    let salarioFinal = salarioNumber.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    document.getElementById('title').innerText = `Salário informado: ${salarioFinal}`
}