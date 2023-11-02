//9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
//Calcular e escrever o valor do novo salário.
function executar9(){
    //Saída de dados
    let salario = parseFloat(prompt("Digite o valor do salário: R$"))
    let percentual = parseInt(prompt("Digite o valor do percentual de reajuste: "))
    
    //Processamento
    let novoSalario = salario + (salario/100*percentual)
    
    //Saída de dados
    alert(`O novo valor do salário é: R$${novoSalario.toFixed(2)}`)
}


