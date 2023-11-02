// Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos 
//exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo 
//e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
function executar39(){
    //entrada de dados
    let nota1 = parent(prompt("Nota 1 : "))
    let nota2 = parent(prompt("Nota 2 : "))
    let nota3 = parent(prompt("Nota 3 : "))
    let notaEXE = parent(prompt("Nota dos exercícios: "))

    //processamento
    let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 *3 +notaEXE)/7

    if (mediaAproveitamento>=9){
        var resultado = "A"
    }
    else if(mediaAproveitamento>=7.5 && mediaAproveitamento<9){
        var resultado = "B"
    }
    else if(mediaAproveitamento>6 && mediaAproveitamento<7.5){
        var resultado = "C"
    }
    else{
        var resultado = "D"
    }

    //saida de dados
    alert(`Sua nota é: ${resultado}`)
}
