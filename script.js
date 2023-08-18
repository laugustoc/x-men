// sempre pensar,planejar e descrever o que vc quer que o seu código faça antes de começar a codar. Colocar comentários no seu código para que você saiba o que cada parte doo seu código vai fazer.
// NUNCA ESQUECER DA PORRA DO PONTO E VÍRGULA;
const seletorPersonagem = document.querySelectorAll ('.personagem');
const somSelecionar = document.querySelector('.select')
// forEach = pra cada. É um laço de repetição for. Ou seja, eu quero armazenar cada personagem na lista personagens
seletorPersonagem.forEach((personagem) => {
    personagem.addEventListener("mouseenter", ()=> {

        somSelecionar.play();

        const personagemSelecionado = document.querySelector ('.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado'); 

        const personagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        personagemGrande.src = `./assets/card-${idPersonagem}.png`;        

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})


if(window.innerHeight < 450) {
    window.scrollTo({top:0, behavior: 'smooth'});
}




