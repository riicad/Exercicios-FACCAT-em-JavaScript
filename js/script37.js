//Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja 
//diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a 
//mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se 
//esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a 
//senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
function executar37(){
    //entrada de dados
    let user = prompt("Nome de usuário: ")
    
    //processamento
    if (user="1234"){
        //entrada de dados
        let senha = prompt("Digite sua senha: ")
        
        //processamento
        if (senha="9999"){
            //saida de dados
            alert("ACESSO PERMITIDO!")
        }
        else{
            //saida de dados
            alert("SENHA INCORRETA!")
        }
    }
    
    else{
        //saida de dados
        alert('Usuário digitado inválido!')
    }

}