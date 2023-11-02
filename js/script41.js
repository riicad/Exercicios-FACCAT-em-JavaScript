//Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis
function executar41(){
    //entrada de dads
    let A = parseFloat(prompt("Lado A: "))
    let B = parseFloat(prompt("Lado B: "))
    let C = parseFloat(prompt("Lado C: "))
    
    //processamento
    if (A < B+C && B < A+C && C < A+B){
        if((B=C) && (A=B)){
            var triangulo = 'EQUILATERO'
        }
        else if((A=B) || (B=C) || (C=A)){
            var triangulo = 'ÍSÓCELES'
        }
        else{
            var triangulo ='ESCALENO'
        }
    }
    else{
        var triangulo = 'NÃO FORMA UM TRIÂNGULO'
    }
    
    //saida de dados
    alert(`Com esses valores esse triângulo: ${triangulo}`)
}