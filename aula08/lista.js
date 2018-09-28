(function(){

    let copaDoMundo = [
        'Brasil', // [0]
        'Argentina', // [1]
        'Alemanha', // [2]
        'Portugal' // [3]
    ];
    
    // Adiciona um elemento na lista copaDoMundo
    copaDoMundo.push('Bélgica');

    // Remove último item da lista
    // copaDoMundo.pop();

    // Exclui o primeiro da lista
    //copaDoMundo.shift();

    // Deleta em uma posição ou intervalo específico
    //copaDoMundo.splice(1, 1);

    // Insere um elemento no começo da lista
    //copaDoMundo.unshift('Colombia');

    let pessoa = {
        nome: 'Wagner',
        idade: 28,
        nacionalidade: 'Brasileira',
        naturalidade: 'Paulistana'
    };

    // Deletar propriedade de um objeto
    //delete pessoa.idade; ou
    //delete pessoa['idade'];

    pessoa.corFavorita = 'Azul';

    //console.log(pessoa);

    let amigos = [
        {nome: 'João', idade: 21},
        {nome: 'Maria', idade: 19}
    ];

    // console.log da idade do jão...
    //console.log(amigos[0].idade);

    let idadeDaPessoa = 21;
    let idadePermitida = 18;
    if(idadeDaPessoa < idadePermitida) {
        // se for verdadeiro
        //console.log('Infelizmente você não poderá entrar =/');
    } else {
        // se for falso
        //console.log('Ta dentro, camarote?');
    }

    let notaFinal = 6;
    let notaQueReprova = 5;
    let notaQueAprova = 7;

    // Aluno aprovado
    // Aluno reprovado
    // Recuperação

})();