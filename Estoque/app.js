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
    // Faz uma lista dos jogos disponíveis
    funcoes.listarJogos(jogos);

    console.log('\nEscolha um jogo de acordo com o seu número');
    resposta = Number(ler());

    //Mostra o jogo escolhido 
    funcoes.mostrarJogo(resposta,jogos);

    break}
    
    else if(resposta == 3){
        // faz uma lista dos jogos disponiveis
         
        funcoes.informarEstoque(jogos)

        jogos.push(funcoes.adicionarAoEstoque())

        console.log(`Jogo adicionado ao estoque!`)

    }

    console.log(`saindo do programa...`)
    break;
}

