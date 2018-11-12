(function() {
    let btnSalvar   = $('#btnSalvar');
    let estados     = document.querySelector('#estados');

    btnSalvar.click(function() {
        // let marcado = $('[name=check]:checked');
        // console.log(marcado[0].value);
        
        console.log($('[name=check]:checked')[0].value);

    });


    // Se a opção for São paulo: 'O dinheiro está aqui!!!!'
    // Se a opção for Rio de janeiro: 'Arraial do cabo!!'
    // Se a opção for Paraná: 'Lava Jato'


    // change onChange

    estados.addEventListener('change', function(evento, x) {        
        console.log($('option:selected').attr('msg'));                
    });


})();