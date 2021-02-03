
// MASCARA NÙMERO DE TELEFONE
$("#formGroupExampleInput3").mask("(99)99999-9999");


// VALIDAÇÂO DE EMAIL 
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="E-mail válido";
    alert("E-mail valido");
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }
    }



// AJUSTE DE CARDES 
    window.addEventListener('resize', function () {
        //var altura = window.innerHeight;
        var largura = window.innerWidth;
    
        if (largura < 750) 
            document.getElementsByClassName('offset-1')[0].className = 'skills col-6 col-lg-2';
    });


    window.addEventListener('resize', function () {
        //var altura = window.innerHeight;
        var largura = window.innerWidth;
    
        if (largura > 750) 
            document.getElementsByClassName('skills col-6 col-lg-2')[0].className = 'skills col-6 col-lg-2 offset-1 ';
    });