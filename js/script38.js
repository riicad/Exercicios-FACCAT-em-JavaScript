//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
//ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
//morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 
function executar38(){
    //entrada de dados
    let nomeProduto = prompt("Nome do Produto: ")
    let quantProduto = parseInt(prompt("Quantidade que você tem do Produto: "))
    let precoUnitari = parseFloat("Preço da unidade do Produto: ")

    //processamento
    let total = quantProduto*precoUnitari
    if (quantProduto<=5){
        var desconto = 2
    }
    else if(quantProduto>5 || quantProduto<=10){
        var desconto = 3
    }
    else{
        var desconto = 5
    }

    let totalPagar = total - (total/100)*desconto

    //saida de dados
    alert(`O total a ser pago pelo produto ${nomeProduto} é: R$${totalPagar}`)
}
