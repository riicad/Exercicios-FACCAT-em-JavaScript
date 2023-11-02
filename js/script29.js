//Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
//crescente. 
function executar29(){
    //entrada de dados
     let numero = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número: "))
    let numero3 = parseInt(prompt("Digite outro número novamente: "))
        
    //processamento
    if (numero>numero2 & numero>numero3 & numero2>numero3){
        var primeiro = numero
        var segundo = numero2
        var terceiro = numero3
    }
    else if (numero2>numero & numero2>numero3 & numero>numero3){
        var primeiro = numero2
        var segundo = numero
        var terceiro = numero3
    }
    else if(numero3>numero & numero3>numero2 & numero>numero2){
         var primeiro = numero3
         var segundo = numero
         var terceiro = numero2
    }
    else if(numero>numero2 & numero>numero3 & numero3>numero2){
        var primeiro = numero
        var segundo = numero3
        var terceiro = numero2
    }
    else if(numero2>numero & numero2>numero3 & numero3>numero){
        var primeiro = numero2
        var segundo = numero3
        var terceiro = numero
    }
    else{
        var primeiro = numero3
        var segundo = numero2
        var terceiro = numero 
    }
    
    //saida de dados
    alert(`Em ordem crescente fica: ${terceiro} -> ${segundo} -> ${primeiro}`)
}   
