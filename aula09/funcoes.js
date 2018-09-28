(function() {

    function somaDoisNumero(n1, n2) {
        let resultado = n1 + n2;
        console.log(resultado);
    };

    //somaDoisNumero(10, 45);


    /* crie uma função que receba
    um número como parâmetro e calcule tabuada
    ex: 1
    1x0=0
    1x1=1
    1x2=2
    1x10=10
    */

    function tabuada(numero) {

        // for = Roda quantas vezes eu determinar
        for(let cont = 0; cont < 11; cont++){
            console.log(cont + ' x ' + numero + ' = ' + cont * numero);
        };

    };

    //tabuada(1787);


    function dataDeHoje() {
        let data = new Date();
        let hoje = data.getUTCDate();

        console.log('Hoje é sexta-feira '+ hoje);
    };

    //dataDeHoje();

    let carros = [
        {marca: 'volkswagem', modelo: 'Golzera'},
        {marca: 'fiat', modelo: 'Stilo'},
        {marca: 'renault', modelo: 'Clio'},
        {marca: 'ford', modelo: 'Ranger'},
        {marca: 'kia', modelo: 'soul'},
        {marca: 'renault', modelo: 'Sandero'}
    ];

    let carroEncontrado = carros.filter(carro => {
       return carro.marca === 'ReNaUlT'.toLowerCase();
    });
    //console.log(carroEncontrado);


    let pessoas = [
        {nome: 'Wagner', idade: 35},
        {nome: 'Maria', idade: 21},
        {nome: 'José', idade: 65}
    ];

    let novasPessoas = pessoas.map(pessoa => {
        if (pessoa.nome === 'José') {
            pessoa.pais = 'Argentina';    
        } else {
            pessoa.pais = 'Brasil';
        }
        
        return pessoa;
    });
    //console.log(novasPessoas);

    let cachorros = [
        {nome: 'Pluto', idade: 5},
        {nome: 'Bidu', idade: 2},
        {nome: 'Costelinha', idade: 12}
    ]

    let cachorroEncontrado = cachorros.find(cachorro => {
        return cachorro.idade === 12;
    })

    console.log(cachorroEncontrado);

})();