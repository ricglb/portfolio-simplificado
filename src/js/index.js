/*
    Objetivo 1 - Quando o usuário clicar no botão de "mostrar mais", deve abrir os projetos que estão escondidos no html.
        
        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe ativo nos projetos escondidos

    Objetivo 2 - Esconder o botão de mostrar mais quando todos os projetos estiverem visíveis.
        Passo 1 - pegar o botão e esconder ele  
*/

// Objetivo 1
    
// Passo 1

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos');

botaoEsconderProjetos.classList.add("remover");

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
    botaoEsconderProjetos.classList.remove("remover");
});

botaoEsconderProjetos.addEventListener('click', () => {
    esconderProjetos();
    mostrarBotao();
    botaoEsconderProjetos.classList.add("remover");
})

function mostrarBotao() {
    botaoMostrarProjetos.classList.remove("remover");
}

function esconderProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
