var btnaddcliente = document.getElementById('btnAddCliente'),
    poppuoAddCliente = document.getElementById('poppupAddCliente'),
    initAddCliente = document.getElementById('inicioAddCliente'),
    aceptar = document.getElementById('btnAccept'),
    cerrar = document.getElementById('btnClose');



btnaddcliente.addEventListener('click', function(){
    poppuoAddCliente.classList.add('activeAddCliente');
});

cerrar.addEventListener('click', function(){
    poppuoAddCliente.classList.remove('activeAddCliente');
});




