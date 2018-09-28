(function() {

    let btn = document.querySelector('#btn');
    let btnApagar = document.querySelector('#btn-apagar');
    let conteudo = document.querySelector('#conteudo');
    let textoDigitado = document.querySelector('#textoDigitado');
    let pegaTextoDigitado = document.querySelector('#pegaTextoDigitado');
    let textoAoVivo = document.querySelector('#textoAoVivo');
    
    btn.addEventListener('click', function(evento) {
        escreveApaga('ESCREVER');
    });

    btnApagar.addEventListener('click', function(evento) {        
        escreveApaga('APAGAR');
    });

    function escreveApaga(parametro) {
        if(parametro === 'ESCREVER') {
            //textoDigitado.value = 'Conteúdo inserido via javascript';
            conteudo.innerHTML = 'Conteúdo inserido via javascript';
        } else {
            conteudo.innerHTML = '';
        }        
    }

    pegaTextoDigitado.addEventListener('click', function() {
        let texto = textoDigitado.value;
        alert(texto);
    });

    textoDigitado.addEventListener('keyup', function(){        
        textoAoVivo.innerHTML = textoDigitado.value;
    });


})();