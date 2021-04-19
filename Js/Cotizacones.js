var btnaddcotizacion = document.getElementById('btnAddCotizacion'),
    poppupcotizacion = document.getElementById('poppupCotizacion'),
    initcotizacion = document.getElementById('inicioCotizacion'),
    aceptar = document.getElementById('btnAccept'),
    cerrar = document.getElementById('btnClose');



btnaddcotizacion.addEventListener('click', function(){
    poppupcotizacion.classList.add('activeFactura');
});

cerrar.addEventListener('click', function(){
    poppupcotizacion.classList.remove('activeFactura');
});




