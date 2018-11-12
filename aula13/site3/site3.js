(function(){

    let nome = document.querySelector('#nome');
    let idade = document.querySelector('#idade');
    let endereco = document.querySelector('#endereco');
    let btnEnviar = document.querySelector('#btnEnviar');


    btnEnviar.addEventListener('click', function() {
        let objetoParaBackend = {
            nome: nome.value,
            idade: parseInt(idade.value),
            endereco: endereco.value
        };

        console.log(objetoParaBackend);
    });




})();