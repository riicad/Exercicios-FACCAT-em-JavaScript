//21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
//minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
function executar21(){
    //entrada de dados
    let inicio = parseFloat(prompt("Qual a hora de ínicio do jogo? "))
    let fim = parseFloat(prompt("Qual a hora final do jogo?"))

    //processamento
    if (inicio==fim){
        var tempoJogo = 24
    }
    else if (inicio<fim){
        var tempoJogo = fim - inicio
    }
    else{
        var tempoJogo = fim - inicio + 24
    }

    //saída de dados
    alert(`O tempo que o jogo durou foi de: ${tempoJogo} horas`)
}
