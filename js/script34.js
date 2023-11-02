//35) Um posto está vendendo combustíveis com a seguinte tabela de descontos:
function executar34(){
    //entrada de dados
    let litrosV = parseInt(prompt("Digite a quantidade dos litros vendidos: "))
    let combustivel = prompt("Qual seria o tipo de combústivel? Alcool ou Gasolina? (A/G)")

    //processamento
    if (combustivel.toUpperCase='G'){
        if (litrosV>20){
            var valorTotal = (litrosV *3.30) - (litrosV*3.30/100)*6
        }
        else{
            var valorTotal = (litrosV *3.30) - (litrosV*3.30/100)*4
        }
    }
    else{
        if (litrosV>20){
            var valorTotal = (litrosV *2.90) - (litrosV*2.90/100)*5
        }
        else{
            var valorTotal = (litrosV *2.90) - (litrosV*2.90/100)*3
        }
    }

    //saida de dados
    alert(`O valor total a ser pago é: R$${valorTotal.toFixed(2)}`)
}
