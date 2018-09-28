(function() {

    let textoLocalStorage = document.querySelector('#textoLocalStorage');
    let salvarNoLocalStorage = document.querySelector('#salvarNoLocalStorage');
    let consultarLocalStorage = document.querySelector('#consultarLocalStorage');
    let DeletarLocalStorage = document.querySelector('#DeletarLocalStorage');
    let printarLocalStorageNatela = document.querySelector('#printarLocalStorageNatela');
    let valorLocalStorage = document.querySelector('#valorLocalStorage');
    
    salvarNoLocalStorage.addEventListener('click', function() {
        localStorage.setItem('texto', textoLocalStorage.value);
    });

    consultarLocalStorage.addEventListener('click', function() {
        alert(localStorage.getItem('texto'));
    });

    DeletarLocalStorage.addEventListener('click', function() {
        //localStorage.removeItem('texto');
        localStorage.clear();
    });

    printarLocalStorageNatela.addEventListener('click', function() {        
        valorLocalStorage.innerHTML = localStorage.getItem('texto');
    });

    
    

})();