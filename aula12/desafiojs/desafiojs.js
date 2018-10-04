(function() {
    
    let carros = [
        {marca: 'Fiat', modelo: '147'},
        {marca: 'Ford', modelo: 'Escort'},
        {marca: 'Volkswagen', modelo: 'Fusca'},
        {marca: 'Volkswagen', modelo: 'Passat CC'}
    ];

    /* resposta do desafio 1
        let sohVolks = carros.filter(function(carro) {
            return carro.marca.toLowerCase() === 'volkswagen';
        });        
        console.log(sohVolks);
    */

    /* resposta do desafio 2
        let todosMenosVolks = carros.filter( carro => {
            return carro.marca.toLowerCase() !== 'volkswagen';
        });

        console.log(todosMenosVolks);
    */

    let pessoas = [
        {nome: 'Maria', idade: '21', estado: 'SP'},
        {nome: 'João', idade: '25', estado: 'RJ'},
        {nome: 'Bruna', idade: '11', estado: 'ES'},
        {nome: 'Pedro', idade: '9', estado: 'SP'},
        {nome: 'Enzo', idade: '3', estado: 'SP'},
        {nome: 'Valentina', idade: '1', estado: 'RS'}
    ];

    /* resposta do desafio 3
        let sohDeMaior = pessoas.filter( pessoa => {
            return pessoa.idade >= 18;
        });
        console.log(sohDeMaior);
    */

    /* resposta do desafio 4
        let paulistanosMenores = pessoas.filter( pessoa => {
            return pessoa.idade < 18 && pessoa.estado === 'SP';
        });
        console.log(paulistanosMenores);
    */

    let times = [
        {time: 'São Paulo', mundiais: '3'},
        {time: 'Ponte Preta', mundiais: '0'},
        {time: 'Santos', mundiais: '2'}
    ];
    
    let mundiais = times.map(time => {
        time.mundiais = '3';
        return time;
    });

    console.log(mundiais);



})();

// filter, find, map, forEach, reduce, some, every

/*
    Desafio 1: console.log() só com os carros da Volks
    Desafio 2: console.log() só todos os carros, menos os da Volks
    Desafio 3: console.log() só com os maiores de 18 anos
    Desafio 4: console.log() só com os menores de 18 anos e de SP
    Desafio 5: Adicionar mais um time na lista
 */ 