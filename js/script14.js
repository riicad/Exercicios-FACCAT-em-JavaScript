//14) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
//contrário escrever NÃO É MAIOR QUE 10! 
function executar14(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    
    //processamento
    if (numero<10){
        //saida de dados
        alert("Esse número é menor que 10! ")
    } 
    else{
        //saida de dados
        alert("Esse número é maior que 10!")
    }

}