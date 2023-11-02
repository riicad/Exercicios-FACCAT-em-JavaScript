//12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
//correspondente em graus Celsius (baseado na fórmula abaixo)
function executar12(){
    //entrada de dados
    let grausFarenheit = parseFloat(prompt("Digite o valor do grau em Farenheit: "))

    //processamento
    let grausCelsius = (grausFarenheit-32)/1.8 // fórmula de conversão Farenheit para Celsius

    //saida de dados 
    alert(`${grausFarenheit}Fº = ${grausCelsius}Cº`)
}