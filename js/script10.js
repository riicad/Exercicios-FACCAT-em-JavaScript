//10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
//seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
//calcular e escrever o custo final ao consumidor. 
function executar10(){
    //entrada de dados
    let custoCarro = parseFloat(prompt("Digite o valor do carro: R$"))
    
    //processamento
    let novoCustoCarro = custoCarro + (custoCarro/100*45) + (custoCarro/100*28) // valor do carro + 45% impostos + 28% da distribuidora

    //saída de dados
    alert(`O novo valor do carro é: R$${novoCustoCarro.toFixed(2)}`)
}
