// Ler dois valores e imprimir uma das três mensagens a seguir: 
//‘Números iguais’, caso os números sejam iguais 
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
//‘Segundo maior’, caso o segundo seja maior que o primeiro.
function executar32(){
    //entrada de dados
    let primeiro = parseInt(prompt("Digite um número: "))
    let segundo = parseInt(prompt("Digite outro número: "))

    
    //processamento
    if (primeiro>segundo){
        //saida de dados
        alert(`O primeiro número é maior!`)
    }
    else if (segundo>primeiro){
        //saida de dados
        alert(`O segundo número é maior!`)
    }
    else{
        //saida de dados
        alert(`Números iguais`)
    }

}