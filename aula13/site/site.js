(function() {
    let listaDeAnimais = $('#listaDeAnimais');
    let btnFiltrarMamiferos = $('#btnFiltrarMamiferos');
    let listaMamiferos = $('#listaMamiferos');

    let animais = [
        {especie: 'mamífero', nome: 'Gato'},
        {especie: 'mamífero', nome: 'Cachorro'},
        {especie: 'mamífero', nome: 'Urso'},
        {especie: 'ovíparo', nome: 'Gavião'},
        {especie: 'ovíparo', nome: 'Passarinho'},
        {especie: 'herbívoro', nome: 'Girafa'}
    ];

    animais.forEach(animal => {
        listaDeAnimais.append(`
            <li>
                <span>Espécie: ${animal.especie}</span>
                <br>
                <span>Nome: ${animal.nome}</span>
            </li>
        `);
    });

    btnFiltrarMamiferos.click(function() {
        //listaDeAnimais.html('');        

        let filtroMamiferos = animais.filter(animal => {
            return animal.especie === 'mamífero';
        });

        

        filtroMamiferos.forEach(item => {            
            
             listaMamiferos.append(`
                <li>
                    <span>Espécie: ${item.especie}</span>
                    <br>
                    <span>Nome: ${item.nome}</span>
                </li>
             `);
        });
        
    });

    

})();