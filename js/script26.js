//27) Ler um valor e escrever se é positivo, negativo ou zero.
function executar26(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))

    //processamento
    if (numero<0){
        //saida de dados
        alert(`${numero}É NEGATIVO`)
    }
    else if(numero==0){
        //saida de dados
        alert(`${numero} É ZERO`)
    }
    else{
        //saida de dados
        alert(`${numero} É POSITIVO`)
    }
}
