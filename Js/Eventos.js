var btnad = document.getElementById('btn-ad'),
    overlayad = document.getElementById('overley-ad'),
    inicioad = document.getElementById('inicio-ad'),
    btnCerrar = document.getElementById('btncerrar'),
    btnAcceder = document.getElementById('btnacceder'),

    btnop = document.getElementById('btn-op'),    
    overlayop = document.getElementById('overley-op'),
    inicioop = document.getElementById('inicio-op');    
    btnCerrarOp = document.getElementById('btncerrarOp'),
    btnAccederOp = document.getElementById('btnaccederOp'),


btnad.addEventListener('click', function(){
    overlayad.classList.add('active');
});

btnCerrar.addEventListener('click', function(){
    overlayad.classList.remove('active');
});


btnop.addEventListener('click', function(){
    overlayop.classList.add('activeOp');
});

btnCerrarOp.addEventListener('click', function(){
    overlayop.classList.remove('activeOp');
});


