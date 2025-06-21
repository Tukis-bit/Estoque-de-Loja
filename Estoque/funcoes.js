import prompt from"prompt-sync"
import * as funcoes from "./funcoes.js";
const ler = prompt();

export function apresentarPrograma(){
    console.log("-----------------------------------------------\n-   Seja bem vindo à Loja de Jogos   -\n-----------------------------------------------");
}

export function apresentarMenu(){
  console.log(`
    ---------------------------------
        O que iremos fazer?
    -   1. Cadastrar Novo Produto   -
    -   2. Listar Produtos          -
    -   3. Adicionar ao Estoque     -
    -   4. Retirar Do Estoque       -
    -   5. Apagar Produto           -
    -   6. Buscar Jogo (por nome)   -
    -   7. Buscar Jogo (por preço)  -
    -   8. Listar por Plataforma    -
    -   0. Sair Do Programa         -
    ---------------------------------`);
    
} 


export function adicionarJogo(){
     console.log('Me informe o nome do jogo ');
    let nome = ler();

    console.log('\nMe informe a impresa criadora do jogo');
    let emp = ler();

    console.log('\nMe informe o tamanho do jogo em Gigas');
    let tamanho = Number(ler());

    console.log('\nMe informe o preço do jogo ');
    let preco = Number(ler());

    console.log('\nMe informe a quantidade de jogos para compra ');
    let quant = Number(ler());

    console.log('\nMe informe a plataforma para compra ');
    let plataforma = ler();

    let jogo = { 
        nomeJogo: nome,
        tamanhoJogo: tamanho,
        empresa: emp,
        precoJogo: preco,
        quantidade: quant,
      plataforma: plataforma}

return jogo;
}


export function listarJogos(jogos){
    console.log("Os jogos no menu são:");
    let i = 1; 

    for(let item of jogos){
      
      console.log(`${i}. ${item.nomeJogo}`)
      i++
    }

}


export async function mostrarJogo(resp,jogos){
     
    console.log(`Jogo: ${jogos[resp -1].nomeJogo}`);
    console.log(`Tamanho: ${jogos[resp -1].tamanhoJogo}`);
    console.log(`empresa: ${jogos[resp -1].empresa}`);
    console.log(`Preço: R$ ${jogos[resp -1].precoJogo}`);
    console.log(`Quantidade para compra: ${jogos[resp -1].quantidade}`);
    console.log(`Plataforma: ${jogos[resp -1].plataforma}`);

}


export function adicionarAoEstoque(resposta,jogos){
console.log(`Qual a quantidade de ${jogos[resposta - 1].nomeJogo} você quer adicionar para compra?`);
let quant = Number(ler());

jogos[resposta - 1].quantidade = jogos[resposta - 1].quantidade + quant;

console.log(`Agora o jogo ${jogos[resposta - 1].nomeJogo} tem ${jogos[resposta - 1].quantidade} disponível para compra`);

}



function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }
  
  
  export function ApagarProduto(jogos){
     if (jogos.length == 0) {
                console.log('Ainda não temos jogos no estoque');
            } 
            else {
                funcoes.listarJogos(jogos);
                console.log('Escolha o jogo que você quer excluir de acordo com o seu número');
                let escolha = Number(ler());
    
                if (escolha < 1 || escolha > jogos.length) {
                    console.log('Não existe jogo com esse código');
                }
                 else {
                    let removido = jogos.splice(escolha - 1, 1);
                    console.log(`Jogo removido com sucesso!`);
                }
            }
  }

export function retirarDoEstoque(resposta,jogos){
console.log(`Qual a quantidade de ${jogos[resposta - 1].nomeJogo} você quer retirar para compra?`);
let quant = Number(ler());

if(quant > jogos[resposta - 1].quantidade){
    console.log('Não é possível retirar Essa quantidade pois não temos tantos jogos no estoque');
}

else{
jogos[resposta - 1].quantidade = jogos[resposta - 1].quantidade - quant;

console.log(`Agora o jogo ${jogos[resposta - 1].nomeJogo} tem ${jogos[resposta - 1].quantidade} disponível para compra`);
}

}

export function buscarJogoNome(jogos){
  console.log(`informe o nome do jogo que você deseja buscar`);
  let nome = ler();
  for(let i = 0; i< jogos.length; i++){
    if(jogos[i].nomeJogo === nome){
      console.log(`O jogo encontrado foi:`);
      console.log(`nome: ${jogos[i].nomeJogo}`);
      console.log(`tamanho: ${jogos[i].tamanhoJogo}`);
      console.log(`preco: ${jogos[i].precoJogo}`);
      console.log(`quantidade: ${jogos[i].quantidade}`);
      

  }
}
}

export function buscarJogoPreco(jogos){
  console.log(`informe o preco do jogo que você deseja buscar`);
  let preco = Number(ler());
  let jogosEncontrados=0;

  for(let i = 0; i < jogos.length; i++){
    if(jogos[i].precoJogo === preco){
      console.log(`O jogo encontrado foi:`);
      console.log(`nome:${jogos[i].nomeJogo}`); 
      jogosEncontrados++
    }
  }
  console.log(`Obrigado por utilizar o sistema!`);

}

export function ListarPorPlataforma(jogos){
  console.log(`informe a plataforma que você deseja buscar`);
  let plataforma = ler();
  for(let i = 0; i<jogos.length; i++){
    if(jogos[i].plataforma === plataforma){
      console.log(`O jogo encontrado foi:`);
      console.log(`nome: ${jogos[i].nomeJogo}`);
      console.log(`tamanho: ${jogos[i].tamanhoJogo}`);
      console.log(`preco: ${jogos[i].precoJogo}`);
      console.log(`quantidade: ${jogos[i].quantidade}`);

    }
  }
  console.log(`Obrigado por utilizar o sistema!`);
}

