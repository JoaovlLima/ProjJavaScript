
/* Arrays contendo todas as teclas, separadas em pretas e brancas */
const teclasB = document.querySelectorAll('.teclaBranca')
const teclasP = document.querySelectorAll('.teclaPreta')

/* variavel responsavel por capitar se o checkBox foi ativo ou não */
const ativarTeclas = document.querySelector('.checkTecla')

/* variavel para que ao apertar o checkbox abilite ou desabilite as teclas */
const desabLetras = document.querySelector('.teclas')

/* Array contendo todas as notas */
const playNotas = (note) =>{
const audio = new Audio(`/notes/${note}.wav`)
audio.play();
}

/* variavel que roda uma função que faz a alocação da nota em um div, e tbm uma edição de css para efeito
de click */
const ClickDownBranco = (teclaBranca) =>{
playNotas(teclaBranca.getAttribute('data-notas'))

teclaBranca.style.background = '#ddd';
}
/* variavel que roda uma função para desativar o efeito style na variavel anterior */
const ClickUpBranco = (teclaBranca) =>{
    teclaBranca.style.background = '#f5f5f5';
    }
   
const ClickDownPreto = (teclaPreta) =>{
    playNotas(teclaPreta.getAttribute('data-notas'))
   
}
const ClickUpPreto = (teclaPreta) =>{
    teclaPreta.style.background = '#000000';
    }
    /* for para rodar a função anterior dando função ao evento de ao clicar com o mouse */
teclasB.forEach((teclaBranca) => {
    teclaBranca.addEventListener('mousedown',() => ClickDownBranco(teclaBranca))
});
teclasB.forEach((teclaBranca) => {
    teclaBranca.addEventListener('mouseup',() => ClickUpBranco(teclaBranca))
});
teclasP.forEach((teclaPreta) =>{
teclaPreta.addEventListener('mousedown',()=> ClickDownPreto(teclaPreta))
})
teclasP.forEach((teclaPreta) =>{
    teclaPreta.addEventListener('mouseup',()=> ClickUpPreto(teclaPreta))
    })
/* array contendo todas as teclas e suas funções */
    const mapTeclaDown = {
        "q": ()=>ClickDownBranco(teclasB[0]),
        "w": ()=>ClickDownBranco(teclasB[1]),
        "e": ()=>ClickDownBranco(teclasB[2]),
        "d": ()=>ClickDownBranco(teclasB[3]),
        "f": ()=>ClickDownBranco(teclasB[4]),
        "g": ()=>ClickDownBranco(teclasB[5]),
        "h": ()=>ClickDownBranco(teclasB[6]),
        "u": ()=>ClickDownBranco(teclasB[7]),
        "i": ()=>ClickDownBranco(teclasB[8]),
        "o": ()=>ClickDownBranco(teclasB[9]),
        "l": ()=>ClickDownBranco(teclasB[10]),
        "ç": ()=>ClickDownBranco(teclasB[11]),
        ";": ()=>ClickDownBranco(teclasB[12]),
        "]": ()=>ClickDownBranco(teclasB[13]),
        "a": ()=>ClickDownPreto(teclasB[0]),
        "s": ()=>ClickDownPreto(teclasP[1]),
        "r": ()=>ClickDownPreto(teclasP[2]),
        "t": ()=>ClickDownPreto(teclasP[3]),
        "y": ()=>ClickDownPreto(teclasP[4]),
        "j": ()=>ClickDownPreto(teclasP[5]),
        "k": ()=>ClickDownPreto(teclasP[6]),
        "p": ()=>ClickDownPreto(teclasP[7]),
        "-": ()=>ClickDownPreto(teclasP[8]),
        "[": ()=>ClickDownPreto(teclasP[9])
    
    }
    const mapTeclaUp = {
        "q": ()=>ClickUpBranco(teclasB[0]),
        "w": ()=>ClickUpBranco(teclasB[1]),
        "e": ()=>ClickUpBranco(teclasB[2]),
        "d": ()=>ClickUpBranco(teclasB[3]),
        "f": ()=>ClickUpBranco(teclasB[4]),
        "g": ()=>ClickUpBranco(teclasB[5]),
        "h": ()=>ClickUpBranco(teclasB[6]),
        "u": ()=>ClickUpBranco(teclasB[7]),
        "i": ()=>ClickUpBranco(teclasB[8]),
        "o": ()=>ClickUpBranco(teclasB[9]),
        "l": ()=>ClickUpBranco(teclasB[10]),
        "ç": ()=>ClickUpBranco(teclasB[11]),
        ";": ()=>ClickUpBranco(teclasB[12]),
        "]": ()=>ClickUpBranco(teclasB[13]),
        "a": ()=>ClickUpPreto(teclasP[0]),
        "s": ()=>ClickUpPreto(teclasP[1]),
        "r": ()=>ClickUpPreto(teclasP[2]),
        "t": ()=>ClickUpPreto(teclasP[3]),
        "y": ()=>ClickUpPreto(teclasP[4]),
        "j": ()=>ClickUpPreto(teclasP[5]),
        "k": ()=>ClickUpPreto(teclasP[6]),
        "p": ()=>ClickUpPreto(teclasP[7]),
        "-": ()=>ClickUpPreto(teclasP[8]),
        "[": ()=>ClickUpPreto(teclasP[9])
    
    }
   /* evento target para capitar quando o checkBox foi ativo assim removendo ou alocando
    uma class que o style deixa a tecla visivel ou não  */
   ativarTeclas.addEventListener('change', ({target})=>{
   
if(target.checked){
    desabLetras.classList.remove('desabilitarLetras')
  
    return
}
desabLetras.classList.add('desabilitarLetras')
   })
/* Evento para deixar a função de ao precionar uma tecla, ela ira ser buscada no mapeamento anterior
e executar o que está após os : */
   document.addEventListener('keydown', (event)=>{
    event.preventDefault()
     mapTeclaDown[event.key]()
    });
    document.addEventListener('keyUp', (event)=>{
      mapTeclaUp[event.key]()
     });
   