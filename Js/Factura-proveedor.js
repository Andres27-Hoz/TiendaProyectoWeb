var btnaddfacturaprov = document.getElementById('btnAddFacturaProv'),
    poppupfacturaProv = document.getElementById('poppupFacturaProv'),
    initfactura = document.getElementById('inicioFactura'),
    aceptar = document.getElementById('btnAccept'),
    cerrar = document.getElementById('btnClose');



btnaddfacturaprov.addEventListener('click', function(){
    poppupfacturaProv.classList.add('activeFacturaProv');
});

cerrar.addEventListener('click', function(){
    poppupfacturaProv.classList.remove('activeFacturaProv');
});




