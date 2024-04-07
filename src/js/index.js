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

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3
    mostrarMaisProjetos();

    //Objetivo 2
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

