let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Joguinho que eu to fazendo');
    exibirTextoNaTela('p', 'Escolha seu numero entre 1 e 10');    
}

exibirMensagemInicial();

//Criar um funçao
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
         exibirTextoNaTela('h1', 'Acertou!');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
         let mensagemTentaiva = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentaiva);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }  
        tentativas++;
        limparCampo()
    } 
}
         
     
    function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}


function reiniciarJogo() {
    numeroSecreto == gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

