//31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
//ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
//dos outros 2 lados. 
function executar30(){
    //entrada de dados
    let ladoA = parseFloat(prompt("LADO A: "))
    let ladoB = parseFloat(prompt("LADO B: "))
    let ladoC = parseFloat(prompt("LADO C: "))

    //processamento
   if (ladoA<ladoB+ladoC & ladoB<ladoA+ladoC & ladoC<ladoA+ladoB){
        //saida de dados
        alert("É um TRIÂNGULO")
    }
    else{
        //saida de dados
        alert("NÃO É UM TRIÂNGULO")
    }
}
