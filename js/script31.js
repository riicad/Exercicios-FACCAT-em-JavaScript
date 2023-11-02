//32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
//do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
function executar31(){
    //entrada de dados
    let time = prompt("Primeiro time: ")
    let gols1 = parseInt(prompt("Quantos gols esse time fez? "))
    
    let time2 = prompt("Segundo time: ")
    let gols2 = parseInt(prompt("Quantos gols esse time fez? "))

    //processamento
    if (gols1>gols2){
        var vencedor = time
    }
    else if(gols2>gols1){
        var vencedor = time2
    }

    //saida de dados
    alert(`O time  VENCEDOR É ${vencedor}`)
}
