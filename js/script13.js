//13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
//final é: 
function executar13(){
    //entrada de dados
    let nota1 = parseFloat(prompt("Primeira nota: "))
    let nota2 = parseFloat(prompt("Segunda nota: "))
    let nota3 = parseFloat(prompt("Terceira nota: "))

    //processamento
    let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10 //fórmula de média dada pelo exercício

    //saída de dados
    alert(`A média final desse aluno é: ${mediaFinal}`)
}