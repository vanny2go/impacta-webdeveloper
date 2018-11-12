(function() {
    
    let textoDigitado = document.querySelector('#textoDigitado');
    let salvarLocalStorage = document.querySelector('#salvarLocalStorage');

    salvarLocalStorage.addEventListener('click', function() {
        localStorage.setItem('mensagem', textoDigitado.value);
    });

})();