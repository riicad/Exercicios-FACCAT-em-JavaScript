//18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 
function executar18(){
    //entrada de dados
    let anoNasc = parseInt(prompt("Digite seu ano de nascimento: "))
    let anoAtual = parseInt(prompt("Digite seu ano atual: "))

    //processamento
    let idadeAtual = anoAtual - anoNasc

    if (idadeAtual<18){
       var resposta = ("PODE VOTAR")
    }
    else{
        var resposta = ("NÃO PODE VOTAR")
    }

    //saida de dados
    alert(resposta)
}