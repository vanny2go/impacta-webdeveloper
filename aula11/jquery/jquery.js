// Javascript puro/vanilla
// (function() {

// })();


// Jquery
// $(function() {

// });

$(function() {

    //let mudarCor = document.querySelector('#mudarCor');
    let mudarCor = $('#mudarCor');
    let body = $('body');
    let esconderImagem = $('#esconderImagem');
    let imagem = $('#imagem');
    let exibirImagem = $('#exibirImagem');
    let escondeExibe = $('#escondeExibe');
    let textoComJquery = $('#textoComJquery');

    // Javascript puro
    // mudarCor.addEventListener('click', function() {
    //     // Evento de click com javascript puro
    // })

    // jQuery
    mudarCor.click(function() {
        // $('body').css({
        //     'background': 'red',
        //     'color': 'white'
        // });
        body.addClass('bg');
    });

    esconderImagem.click(function() {
        imagem.fadeOut();
    });

    exibirImagem.click(function() {
        imagem.fadeIn();
    });

    escondeExibe.click(function() {
        imagem.slideToggle();
    });

    textoComJquery.text('Texto inserido via jQuery');

    // equivalente ao fetch
    $.get('https://viacep.com.br/ws/04551010/json/', function(dados) {
        console.log(dados);
    })

    //console.log($('.box').parent().parent());

    console.log($('div[minhaDiv]'))


    let frutas = [
        'Uva',
        'Banana',
        'Maçã',
        'Abacaxi'
    ];

    frutas.forEach(function(fruta) {
        console.log('O nome da fruta é: ' + fruta);
    })

    // $.each(frutas, function(contador) {
    //     console.log(frutas[contador])
    // })

})