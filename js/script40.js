//Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
//estar em condições, um dos seguintes requisitos deve ser satisfeito: 
//- Ter no mínimo 65 anos de idade. 
//- Ter trabalhado no mínimo 30 anos. 
//- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
//Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
//de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
//de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

function executar40(){
    //entrada de dados
    let empregado = parseInt(prompt("Código do Empregado: "))
    let nascimento = parseInt(prompt("Ano de nascimento: "))
    let anosTrabalhados =parseInt(prompt("Ano que você entrou na Empresa: "))

    //processamento
    if (2023-nascimento>=65){
        var resultado = "Pode aposentar"
    }
    else if(2023-anosTrabalhados>=30){
        var resultado = "Pode aposentar"
    }
    else if (2023-nascimento>=60 && 2023-anosTrabalhados>25){
        var resultado = "Pode aposentar"
    }
    else{
        var resultado = "Não pode aposentar"
    }

    //saida de dados
    alert(resultado)
}
