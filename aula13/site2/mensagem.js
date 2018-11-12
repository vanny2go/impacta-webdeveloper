(function() {

    let textoLocalStorage = document.querySelector('#textoLocalStorage');
    textoLocalStorage.innerHTML = localStorage.getItem('mensagem');
    
})();

