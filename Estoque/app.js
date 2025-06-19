import prompt from 'prompt-sync'
import * as funcoes from './funcoes.js';
const ler = prompt();

let jogos = [];

funcoes.apresentarPrograma();

//Mostra e repete o menu de acordo com a resposta do usuário
for(let i =1; i != 0; i++){
funcoes.apresentarMenu();
let resposta = Number(ler()); 

//Adicionar um jogo no estoque
if(resposta == 1){
 jogos.push(funcoes.adicionarJogo());
}

else if(resposta == 2){
    
    if(jogos.length === 0){
        console.log('Ainda não temos jogos no estoque')
    }
    
    // Faz uma lista dos jogos disponíveis
    else{
    funcoes.listarJogos(jogos);

    console.log('\nEscolha um jogo de acordo com o seu número');
    resposta = Number(ler());

    
    if(resposta - 1 > jogos.length -1 || resposta - 1 < jogos.length -1 ){
        console.log('Não existe jogo com esse código');
    }

    else{
    //Mostra o jogo escolhido 
    funcoes.mostrarJogo(resposta,jogos);
}
}
    }
    
    else if(resposta == 3){
        // faz uma lista dos jogos disponiveis
         
    if(jogos.length == 0){
        console.log('Ainda não temos jogos no estoque')
    }

    else{
        funcoes.listarJogos(jogos)
        console.log('Escolha o jogo que você quer adicionar de acordo com o seu número');
        resposta = Number(ler());

        
        if(resposta - 1 > jogos.length -1 || resposta - 1 < jogos.length -1 ){
            console.log('Não existe jogo com esse código');
        }

        else{
        //Adiciona a quantidade do jogo ao estoque
        funcoes.adicionarAoEstoque(resposta,jogos);

        console.log(`Adicionado ao estoque!`)
}
}
    }

    else if( resposta == 4){
        
    if(jogos.length == 0){
        console.log('Ainda não temos jogos no estoque')
    }
    
    else{
        
        // faz uma lista dos jogos disponiveis
         
           funcoes.listarJogos(jogos);

           console.log('Escolha o jogo que você quer retirar de acordo com o seu número');
           resposta = Number(ler());
   
            if(resposta - 1 > jogos.length -1 || resposta - 1 < jogos.length -1 ){
                console.log('Não existe jogo com esse código');
            }

            else{
            //Retira a quantidade do jogo ao estoque
           funcoes.retirarDoEstoque(resposta,jogos);
   }
           
    }

    console.log(`saindo do programa...`)
    break;
}
}

