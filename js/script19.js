//19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
function executar19(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let numero1 = parseInt(prompt("Digite outro número: "))

    //processamento
    if (numero>numero1){
        var maior = numero
    }
    else{
        var maior = numero1
    }

    //saida de dados
    alert(`O maior deles é ${maior}`)
}