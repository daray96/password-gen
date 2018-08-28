(function(){
    
    /*VARIABLES Y OBJETOS*/
    var app = document.getElementById('app'),
        
        inputCaracteres = document.getElementById('numero-caracteres'),
        
        configuracion = { 
            caracteres: parseInt(inputCaracteres.value),
            simbolos :true,
            numeros:true,
            mayusculas : true,
            minusculas: true
            },
        
        caracteres = {
            numeros: '0123456789',
            mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            minusculas: 'abcdefghijklmnopqrstuvwxyz',
            simbolos: '$!-&%#@()?<>[]+='
        };

    /*EVENTOS*/
    
    /*Evita que la pagina se recarge al dar click a algun boton del formulario*/
    app.addEventListener('submit', function(e){
        e.preventDefault();
    });
    
    /*Botones de aumentar y reducir numero de caracteres*/
    app.elements.namedItem('btn-mas-uno').addEventListener('click', function(){
        configuracion.caracteres++;
        inputCaracteres.value = configuracion.caracteres;    
//        console.log(configuracion.caracteres);
    }); 
    app.elements.namedItem('btn-menos-uno').addEventListener('click', function(){
        if (configuracion.caracteres > 7){
        configuracion.caracteres--;
        inputCaracteres.value = configuracion.caracteres;
        }
//        console.log(configuracion.caracteres);
    });
    
    
    app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
        if (configuracion.simbolos === true) {
            configuracion.simbolos = false;
            document.getElementById('btn-simbolos').innerHTML = '<i class="fas fa-times">';
        } else{
            configuracion.simbolos = true;
            document.getElementById('btn-simbolos').innerHTML = '<i class="fas fa-check">';
        }
        
//        console.log(configuracion.simbolos);
    });
    
    app.elements.namedItem('btn-numeros').addEventListener('click', function(){
        if (configuracion.numeros === true) {
            configuracion.numeros = false;
            document.getElementById('btn-numeros').innerHTML = '<i class="fas fa-times">';
        } else{
            configuracion.numeros = true;
            document.getElementById('btn-numeros').innerHTML = '<i class="fas fa-check">';
        }
//        console.log(configuracion.numeros);
    });
    
    app.elements.namedItem('btn-mayusculas').addEventListener('click', function(){
        if (configuracion.mayusculas === true) {
            configuracion.mayusculas = false;
            document.getElementById('btn-mayusculas').innerHTML = '<i class="fas fa-times">';
        } else{
            configuracion.mayusculas = true;
            document.getElementById('btn-mayusculas').innerHTML = '<i class="fas fa-check">';
        }
//        console.log(configuracion.mayusculas);
    });
    
    
    app.elements.namedItem('btn-generar').addEventListener('click', function(){
        document.getElementById('password').value = generarPassword();
    });
    
    app.elements.namedItem('password').addEventListener('click', function(){
        copiar();
        
    })
   
    /*FUNCION DE GENERACION ALEATORIA DE PASSWORD*/
    
    function generarPassword (){
        var caracteresFinales = '',
            c = 0,
            password = [];
        
        for (propiedad in configuracion){
            if (configuracion[propiedad] == true){
                caracteresFinales += caracteres[propiedad] + '';
            }
        }
        
        caracteresFinales = caracteresFinales.split('');
        
        for(;c < configuracion.caracteres; c++){
            password.unshift(caracteresFinales[Math.floor(Math.random()*caracteresFinales.length)]);   
        };
        
        return password.join('');
            
//        console.log(caracteresFinales);console.log(caracteresFinales.length);
//        console.log(password);
    }
    
    
    /*FUNCION DE COPIAR PASSWORD*/
    
    function copiar (){
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
        
        document.getElementById('alerta-copiado').classList.add('active');
        
        setTimeout(function(){
            document.getElementById('alerta-copiado').classList.remove('active');     
                   }, 2000);
    }
    
}())