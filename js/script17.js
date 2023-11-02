//17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
//uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
//aluno é aprovado). Escrever também a média calculada
function executar17(){
    //entrada de dados
    let nota1 = parseFloat(prompt("Primeira nota: "))
    let nota2 = parseFloat(prompt("Segunda nota: "))

    //processamento
    let media = (nota1+nota2)/2
    if (media<6){
        //saida de dados
       alert("O aluno foi REPROVADO")
    }
    else{
        //saida de dados
        alert("O aluno foi APROVADO")
    }
}
