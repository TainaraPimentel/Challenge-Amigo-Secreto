//O principal objetivo deste desafio é fortalecer suas habilidades em 
//lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//lista que armazena os nomes digitados pelo usuário
let listaDeAmigos = [];

//função atrelada ao botão adicionar, armazena os valores digitados no input na lista de amigos
function adicionarAmigo() {

    let nome = document.querySelector('input').value;
    console.log("botão adicionar foi clicado");
    //validação de valor digitado pelo usuário 
    if (nome == ""){
        alert("erro: Por favor, insira um nome.");
        console.log("Erro: Por favor, insira um nome.");
    } else {
        listaDeAmigos.push(nome);
        //lista o nome inserido abaixo do campo
        ordenarListaDeAmigo(listaDeAmigos);
        //limpar o campo
        limparCampo();
        console.log("OK: Nome digitado inserido a lista e campo de digitação limpo");
    }   
}

//função lista nome digitado pelo usuário
function ordenarListaDeAmigo(listaDeAmigos) {
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = "";
    listaDeAmigos.forEach((nomeLista) => {
        let lista = document.createElement('li');
        lista.textContent = nomeLista;
        campo.appendChild(lista); 
    });
}

//função limpa o valor digitado pelo usuário
function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

//função realiza sorteio aleatório da listaDeAmigos digitada
function sortearAmigo() {

    console.log("botão sortear foi clicado");

    if (listaDeAmigos == ""){
        alert("erro: Por favor, insira um nome.");
        console.log("Erro: Por favor, insira um nome.");
    } else {
        
        let sorteio = Math.random() * (listaDeAmigos.length - 0) + 0;
        let numeroSorteado = Math.floor(sorteio);
        console.log(numeroSorteado);
        console.log(listaDeAmigos[numeroSorteado]);

        let campo = document.querySelector('ul');
        campo.innerHTML = "";
    
        let nomeSorteado = document.getElementById('resultado');
        nomeSorteado.innerHTML = ("O amigo secreto sorteado é: " + listaDeAmigos[numeroSorteado]); 

    }   
}

