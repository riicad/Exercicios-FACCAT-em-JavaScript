//22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
//de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
//Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
//o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
//(considere que o mês possua 4 semanas exatas). 
function executar22(){
    //entrada de dados
    let horasTrabalhadas = parseFloat(prompt("Digite quantidade de horas trabalhadas no mês: "))
    let salarioHoras = parseFloat(prompt("Digite o valor a receber por hora trabalhada: R$"))

    //processamento
    let horaExtra =  salarioHoras + (salarioHoras/100*50)
    
    if (horasTrabalhadas<40){
        var salarioTotal = horasTrabalhadas*salarioHoras
    }
    else{
         var salarioTotal = horasTrabalhadas*salarioHoras + ((horasTrabalhadas - 40) * horaExtra)
    }

    //saida de dados
    alert(`A O salário total dos funcionários é igual a R$${salarioTotal}`)
}