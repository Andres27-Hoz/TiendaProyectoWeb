var btnaddproveedor = document.getElementById('btnAddProveedor'),
    poppupAddProveedor = document.getElementById('poppupAddProveedor'),
    initAddProveedor = document.getElementById('inicioAddProveedor'),
    aceptar = document.getElementById('btnAccept'),
    cerrar = document.getElementById('btnClose');



btnaddproveedor.addEventListener('click', function(){
    poppupAddProveedor.classList.add('activeAddProveedor');
});

cerrar.addEventListener('click', function(){
    poppupAddProveedor.classList.remove('activeAddProveedor');
});




