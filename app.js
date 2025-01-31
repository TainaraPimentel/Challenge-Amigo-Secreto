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
