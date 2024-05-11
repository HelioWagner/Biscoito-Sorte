const imgBiscoito =  document.querySelector('.tremeImg')
const layoutHome  =  document.querySelector('.layoutHome')
const layoutSorte  =  document.querySelector('.layoutSorte')
const button =  document.querySelector('button')

imgBiscoito.addEventListener('click',atualizaBiscoito);
button.addEventListener('click',atualizaBiscoito);

function atualizaBiscoito(conteudo) {
    
    if (conteudo.target.className == 'tremeImg') {
        layoutHome.classList.toggle('hide') 
        layoutSorte.classList.remove('hide')  
    }
    else {
        layoutHome.classList.remove('hide') 
        layoutSorte.classList.toggle('hide')  
    }
    
}

