//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
//ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
//morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente
function executar36(){
    //entrada de dados
    let kilosMaca = parseFloat(prompt("Digite a quantida de KG de maçã: "))
    let kilosMorang = parseFloat(prompt("Digite a quantidade de KG de mrangos: "))

    //processamento
    if (kilosMaca>5){
        var precoMaca = 1.50
    }
    else{
        var precoMaca = 1.80
    }

    if (kilosMorang>5){
        var precoMorang = 2.20
    }
    else{
        var precoMorang = 2.50
    }

    let ValorTotal = (precoMaca*kilosMaca) + (precoMorang*kilosMorang)

    if (kilosMaca+kilosMorang>8 || ValorTotal>25){ //mais de oito kilos de frutas ou gastou mais de 25,00 reais.
        var totalPago = ValorTotal - (ValorTotal * 0.10)
    }
    else{
        var totalPago = ValorTotal
    } 

    //saida de dados
    alert(`O total a ser pago é: R$${totalPago.toFixed(2)}`)
}
