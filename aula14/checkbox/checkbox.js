(function() {

    let btnSalvar = $('#btnSalvar');
    let marcarTodos = $('#marcarTodos');
    let desmarcarTodos = $('#desmarcarTodos');
    

    btnSalvar.click(function() {
        let marcados = $('[name=check]:checked');  

        //console.log(typeof marcados); // object

        // for (in) ou for (of) percorrem objetos      

        for (x of marcados) {
            console.log(x.value);
        }
    });

    marcarTodos.click(function() {
        let campos = $('[name=check]');

        // Resposta 1
        campos.each(function(){
            $(this).prop('checked', true);
        });

        // Resposta 2
        // for (x of campos) {
        //     x.checked = true;
        // }

        // Resposta 3
        //$('[name=check]').prop('checked', true);
        
    });

    desmarcarTodos.click(function() {
        let campos = $('[name=check]');

        // Resposta 1
        // campos.each(function(){
        //     $(this).prop('checked', false);
        // });

        // Resposta 2
        // for (x of campos) {
        //     x.checked = false;
        // }

        //Resposta 3
        $('[name=check]').prop('checked', false);
        
    });

})();