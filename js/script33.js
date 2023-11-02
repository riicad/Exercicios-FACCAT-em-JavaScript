//Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:
function executar33(){
    //entrada de dados
    let x = parseInt(prompt("Digite um número: "))
    let y = parseInt(prompt("Digite outro número: "))

    //processamento
    let z = (x*y) + 5

    if (z<=0){
        var resposta = 'A'
    }
    else if(z<=100){
        var resposta = 'B'
    }
    else{
        var resposta = 'C'
    }

    //saida de dados
    alert(z+" "+resposta)
}
