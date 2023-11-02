//28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
function executar27(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número: "))
    let numero3 = parseInt(prompt("Digite outro número novamente: "))
    
    //processamento
    if (numero>numero2 & numero>numero3){
        var maior = numero
    }
    else if (numero2>numero & numero2>numero3){
        var maior = numero2
    }
    else{
        var maior = numero3
    }

    //saida de dados
    alert(`A maior entre eles é ${maior}`)
}