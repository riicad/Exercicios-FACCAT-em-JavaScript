// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
//escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
//ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
function executar24(){
    //entrada de dados  
    let conta = parseInt(prompt("Número da conta: "))
    let saldo = parseFloat(prompt("Saldo da conta: "))
    let debito = parseFloat(prompt("Débito da conta: "))
    let credito = parseFloat(prompt("Crédito da conta: "))

    //processamento
    let saldoAtual = saldo - debito + credito
    if (saldoAtual>=0){
        var resposta = ("POSITIVO")
    }
    else{
        var resposta = ("NEGATIVO")
    }
    //saida de dados
    alert(`Conta: ${conta} 
        \nSaldo atual: R$${saldoAtual.toFixed(2)}
        \nSaldo: ${resposta}`)
}
