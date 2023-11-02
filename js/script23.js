//24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
//ultrapassar este valor, calcular e escrever o seu salário total
function executar23(){
    //entrada de dados
    let salarioFixo = parseFloat(prompt("Digite o valor do seu salário: R$"))
    let valorDasVendas = parseFloat(prompt("Digite o valor das vendas: R$"))

    //processamento
    if (1500>=valorDasVendas){
        var comissao = (valorDasVendas/100)*3
    }
    else{
        var comissao = (valorDasVendas/100)*5
    }

    //saida de dados
    alert(`O valor total do salário dele é: R$${(salarioFixo+comissao).toFixed(2)}`)
}
