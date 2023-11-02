//16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
//escreva o custo total da compra. 
function executar16(){
    //entrada de dados
    let quantMacas = parseInt(prompt("Qual a quantidade de maçã que você comrprou? "))

    //processamento
    if(quantMacas<12){
        var precoMaca = 1.30
    }
    else{
        var precoMaca = 1.00
    }

    let valorTotal = quantMacas * precoMaca

    //saida de dados
    alert(`O valor a ser pago nas maçãs é: R$${valorTotal}`)
}