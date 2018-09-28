(function() {

let btnBuscarCep = document.querySelector('#btnBuscarCep');
let cepDigitado = document.querySelector('#cepDigitado');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let logradouro = document.querySelector('#logradouro');

btnBuscarCep.addEventListener('click', function() {    
    buscaCep(cepDigitado.value);
});

// cepDigitado.addEventListener('keypress', function(tecla) {
//     // if(tecla.which == 13) {
//     //     buscaCep(cepDigitado.value);
//     // }

//     // if(event.keyCode == 13) {
//     //     buscaCep(cepDigitado.value);
//     // }
// })

cepDigitado.addEventListener('keyup', function() {
    if(cepDigitado.value.length >= 8) {
        btnBuscarCep.disabled = false;
        cepDigitado.classList.remove('error');        
    } else {
        btnBuscarCep.disabled = true;
        cepDigitado.classList.add('error');
    }
})

function buscaCep(cepDigitadoPeloUsuario) {

    fetch('https://viacep.com.br/ws/'+ cepDigitadoPeloUsuario +'/json/', {
        method: 'GET'
    }).then(function(response) {
        response.json().then(function(dados){            
            console.log(dados)
            bairro.innerHTML = dados.bairro;
            localidade.innerHTML = dados.localidade;
            logradouro.innerHTML = dados.logradouro
        })
    }).catch(function(error) {
        console.log(error);
    })

}








})();