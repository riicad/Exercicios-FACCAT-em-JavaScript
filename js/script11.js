//11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
//mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
//efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
//vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
//vendedor. 
function executar11(){
    //entrada de dados
    let numCarros = parseInt(prompt("Digite o número de carros vendidos: "))
    let valorVendas = parseFloat(prompt("Digite o valor de vendas: R$"))
    let salarioFixo = parseFloat(prompt("Digite o valor do seu salário fixo: R$"))
    let carroVendido = parseFloat(prompt("Digite o valor da comissão para cada carro vendido: R$"))

    //processamento
    let totalSalario = salarioFixo + (valorVendas/100*5) + (numCarros*carroVendido) // salário + 5% das vendas + valor de cada que ele vendeu

    //saída de dados
    alert(`O salário desse funcionário é: R$${totalSalario.toFixed(2)}`)
}
