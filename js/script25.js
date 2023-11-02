//Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
//quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
 //   média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
  //  a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
  //  compra'. 
function executar25(){
    //entrada de dados
    let quantAtual = parseInt(prompt("Quantidade atual do produto: "))
    let quantMax = parseInt(prompt("Quantidade a maxima do produto: "))
    let quantMin = parseInt(prompt("Quantidade mínima do produto: "))
    
    //processamento
    let media = (quantMax + quantMin)/2
    if (quantAtual<media){
        //saida de dados
        alert(`Efetuar a compra!`)
    }
    else{
        //saida de dados
        alert(`Não efetuar a compra!`)
    }
}
