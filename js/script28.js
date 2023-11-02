//29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
//maiores.
function executar28(){
    //entrada de dados
     let numero = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número: "))
    let numero3 = parseInt(prompt("Digite outro número novamente: "))
        
    //processamento
    if (numero>numero2 & numero>numero3 & numero2>numero3){
        var maior = numero
        var segundoMaior = numero2
    }
    else if (numero2>numero & numero2>numero3 & numero>numero3){
        var maior = numero2
        var segundoMaior = numero
    }
    else if(numero3>numero & numero3>numero2 & numero>numero2){
         var maior = numero3
         var segundoMaior = numero
    }
    else if(numero>numero2 & numero>numero3 & numero3>numero2){
        var maior = numero
        var segundoMaior = numero3
    }
    else if(numero2>numero & numero2>numero3 & numero3>numero){
        var maior = numero2
        var segundoMaior = numero3
    }
    else{
        var maior = numero3
        var segundoMaior = numero2 
    }
    
    //saida de dados
    alert(`A soma entre os 2 maiores é ${maior+segundoMaior}`)
    }