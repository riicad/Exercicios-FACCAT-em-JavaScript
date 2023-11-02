//8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
//brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
//de eleitores
function executar8(){
    //Entrada de dados
    let brancoVotos = parseInt(prompt("Quantos votos teve em branco? "))
    let nuloVotos = parseInt(prompt("Quantos votos teve em nulos? "))
    let validoVotos = parseInt(prompt("Quantos votos váidos teve? "))

    //Processamento
    let totalVotos = brancoVotos + nuloVotos + validoVotos
    let pValido = (validoVotos/totalVotos) * 100
    let pBranco = (brancoVotos/totalVotos) * 100
    let pNulo = (nuloVotos/totalVotos) * 100

    //Saída de dados
    alert(`A porcetantagem de votos válidos é: ${pValido}% votos`)
    alert(`A porcentagem de votos em branco é: ${pBranco}% votos`)
    alert(`A porcentagem de votos nulos é: ${pNulo}% votos`)
}
