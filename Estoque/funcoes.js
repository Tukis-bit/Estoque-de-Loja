import prompt from"prompt-sync"
const ler = prompt();

export function apresentarPrograma(){
    console.log("-----------------------------------------------\n-   Seja bem vindo à Loja de Jogos do Tukis   -\n-----------------------------------------------");
}

export function apresentarMenu(){
    console.log('---------------------------------\n-   1. Cadastrar Novo Produto   -\n-   2. Listar Produtos          -\n-   3. Adicionar ao Estoque     -\n-   4. Retirar Do estoque       -\n-   5. Apagar Produto           -\n-   0. Sair Do Programa         -\n---------------------------------');
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

    let jogo = { 
        nomeJogo: nome,
        tamanhoJogo: tamanho,
        empresa: emp,
        precoJogo: preco,
        quantidade: quant}

return jogo;
}




export function listarJogos(jogos){
    console.log("Os jogos No menu são:");
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

}





export function adicionarAoEstoque(resposta,jogos){
console.log(`Qual a quantidade de ${jogos[resposta - 1].nomeJogo} voê quer adicionar para compra?`);
let quant = Number(ler());

jogos[resposta - 1].quantidade = jogos[resposta - 1].quantidade + quant;

console.log(`Agora o jogo ${jogos[resposta - 1].nomeJogo} tem ${jogos[resposta - 1].quantidade} disponível para compra`);

}

export async function adicionarAoEstoque(jogos){


    console.log(`Você deseja adicionar algum jogo ao estoque?`)
    let adi=ler();


    if(adi === 'sim' || adi === 'Sim' || adi === 's'){
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

        let jogo = { 
            nomeJogo: nome,
            tamanhoJogo: tamanho,
            empresa: emp,
            precoJogo: preco,
            quantidade: quant
        }
        
        return jogo;

    }
   
}

function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }
  
export function retirarDoEstoque(resposta,jogos){
console.log(`Qual a quantidade de ${jogos[resposta - 1].nomeJogo} voê quer retirar para compra?`);
let quant = Number(ler());

if(quant > jogos[resposta - 1].quantidade){
    console.log('Não é possível retirar Essa quantidade pois não temos tantos jogos no estoque');
}

else{
jogos[resposta - 1].quantidade = jogos[resposta - 1].quantidade - quant;

console.log(`Agora o jogo ${jogos[resposta - 1].nomeJogo} tem ${jogos[resposta - 1].quantidade} disponível para compra`);
}

}


