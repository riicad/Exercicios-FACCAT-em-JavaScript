// Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
//dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
//das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
//novo com a mulher mais velha.
function executar35(){
    //entrada de dados
    let iHomens = parseInt(prompt("Digite a idade: "))
    let iMulher = parseInt(prompt("Digite a mulher: "))
    let iHomens2 = parseInt(prompt("Digite a idade do segundo nome: "))
    let iMulher2 = parseInt((prompt("Digite a idade da segunda mulher: "))) 

    //processamento
    if (iHomens>iHomens2){
        var maisVelho = iHomens
        var maisNovo = iHomens2
    }
    else{
        var maisVelho = iHomens2
        var maisNovo = iHomens
    }

    if (iMulher>iMulher2){
        var maisVelha = iMulher
        var maisNova = iMulher2
    }
    else{
        var maisVelha = iMulher2
        var maisNova = iMulher
    }

    let resultado = maisVelho + maisNova
    let produto = maisVelha * maisNovo

    //saida de dados
    alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${resultado}`)
    alert(`O produto da idade da mulher mias velha com o homem mais novo é: ${produto}`)
}
