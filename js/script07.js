//7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
//dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
function executar7(){
    //Entrada de dados
    let idadeAnos = parseInt(prompt("Digite seus anos de idade: "))
    let idadeMeses = parseInt(prompt("Digite seus meses restantes de idade: "))
    let idadeDias = parseInt(prompt("Digite seus dias restantes de idade: "))

    //Processamento
    let totalDiasIdade = (idadeAnos*365) + (idadeMeses*30) + idadeDias

    //Saída de dados
    alert(`A sua idade em dias é: ${totalDiasIdade} dias`)

}
