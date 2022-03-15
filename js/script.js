let formulario = document.getElementById('formulario-02');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    if(this.getAttribute('class').match(/erro/)){
        return false;
    }
})

/*
nome e cidade = obrigatorio
email = email /\w+[@]\w+[.]\w[.]*\w* /
telefone = tel /\d{0,2}\d{4,5}([-]*)\d{4}/
cep = num /\d{5}([-]*)\d{3}/
uf = uf /[a-z]{2}/
*/

for(let foco of formulario.querySelectorAll('.obrigatorio')){validacao(foco);}
for(let foco of formulario.querySelectorAll('.email')){email(foco);}
for(let foco of formulario.querySelectorAll('.tel')){tel(foco);}
for(let foco of formulario.querySelectorAll('.num')){num(foco);}
for(let foco of formulario.querySelectorAll('.uf')){uf(foco);}

function validacao(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/\w+/i)){
            document.querySelector('.mensagem').innerHTML = '<p class="erro">ERRO DIGITE UM VALOR VÁLIDO</p>'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            let valor = this.value
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}
function email(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/\w+[@]\w+[.]\w[.]*\w*/i)){
            document.querySelector('.mensagem').innerHTML = '<p class="erro">ERRO DIGITE UM VALOR VÁLIDO</p>'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            let valor = this.value
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}
function tel(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/^\d{0,2}\d{4,5}[-]{0,1}\d{4}$/)){
            document.querySelector('.mensagem').innerHTML = '<p class="erro">ERRO DIGITE UM VALOR VÁLIDO</p>'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            let valor = this.value.match(/-/) ? this.value.replace(/-/,'') : this.value
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}
function num(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/^\d{5}[-]{0,1}\d{3}$/)){
            document.querySelector('.mensagem').innerHTML = '<p class="erro">ERRO DIGITE UM VALOR VÁLIDO</p>'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            let valor = this.value.match(/-/) ? this.value.replace(/-/,'') : this.value
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}
function uf(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/^[a-z]{2}$/i)){
            document.querySelector('.mensagem').innerHTML = '<p class="erro">ERRO DIGITE UM VALOR VÁLIDO</p>'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            let valor = this.value
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}
