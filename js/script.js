let formulario = document.getElementById('formulario-02');
ver = 0

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log(this.getAttribute('class'))
    if (validageral()){
        if(this.getAttribute('class').match(/erro/)){
            return false;
        }else{
            return false;
        }
    }
})

function validageral(){
    let evento = formulario.getElementsByTagName('input')
    let d = 0
    for(let c of evento){
        if(!this.value.match('')){
            d++
        }else{
            d--
        }  
    }
    console.log(d);
    if(d == 6){
        return true;
    }else{
        return false;
    }
}
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
            erro(true, elemento);
            return false;
        }else{
            let valor = this.value
            erro(false, elemento);
        }
    })
}
function email(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/\w+[@]\w+[.]\w[.]*\w*/i)){
            erro(true, elemento);
            return false;
        }else{
            let valor = this.value
            erro(false, elemento);
        }
    })
}
function tel(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/^\d{0,2}\d{4,5}[-]{0,1}\d{4}$/)){
            erro(true, elemento);
            return false;
        }else{
            let valor = this.value.match(/-/) ? this.value.replace(/-/,'') : this.value
            erro(false, elemento);
        }
    })
}
function num(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/^\d{5}[-]{0,1}\d{3}$/)){
            erro(true, elemento);
            return false;
        }else{
            let valor = this.value.match(/-/) ? this.value.replace(/-/,'') : this.value
            erro(false, elemento);
        }
    })
}
function uf(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        event.stopPropagation();
        if (!this.value.match(/^[a-z]{2}$/i)){
            erro(true, elemento);
            return false;
        }else{
            let valor = this.value
            erro(false, elemento);
        }
    })
}
function erro(questao, elemento){
    if (questao){
        elemento.classList.add('erro');
        ver ++
    }else{
        elemento.classList.remove('erro');
        ver --
    }
    if (ver == 0){
        elemento.parentNode.classList.remove('erro');
        document.querySelector('.mensagem').innerHTML = ''
    }else if(ver < 0 ){
        window.alert(`pane, erro inesperado valor de ver = ${ver}`)
    }else{
        document.querySelector('.mensagem').innerHTML = `<p class="erro">ERRO DIGITE UM VALOR VÁLIDO</p></br><p>Número de caixas em erro: ${ver}</p>`
        elemento.parentNode.classList.add('erro');
        return false;
    }
}