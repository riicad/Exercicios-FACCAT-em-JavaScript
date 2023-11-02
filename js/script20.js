//20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 
function executar20(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let numero1 = parseInt(prompt("Digite outro número: "))

    //processamento
    if (numero>numero1){
        var maior = numero
        var menor = numero1
    }
    else{
        var maior = numero1
        var menor = numero
    }

    //saida de dados
    alert(`Ordem crescente deles é: ${maior}, > ${menor}`)
}
