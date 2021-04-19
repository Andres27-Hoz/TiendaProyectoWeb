var btnaddfactura = document.getElementById('btnAddFactura'),
    poppupfactura = document.getElementById('poppupFactura'),
    initfactura = document.getElementById('inicioFactura'),
    aceptar = document.getElementById('btnAccept'),
    cerrar = document.getElementById('btnClose');



btnaddfactura.addEventListener('click', function(){
    poppupfactura.classList.add('activeFactura');
});

cerrar.addEventListener('click', function(){
    poppupfactura.classList.remove('activeFactura');
});




