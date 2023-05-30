
function encriptar(){
    var texto = document.getElementById("inputext").value.toLowerCase();

    var txtCifrado= texto.replace(/e/igm,"enter");/*i Afecte mayusculas como minusculas, g para toda la oracion, m miltiples lineas o parrafos */
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");


    document.getElementById("img2").style.display="none";
    document.getElementById("textDerecha").style.display="none";
    document.getElementById("textDer").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit"
}

function desencriptar(){
    var texto=document.getElementById("inputext").value.toLowerCase();

    var txtCifrado= texto.replace(/enter/igm,"e");/*i Afecte mayusculas como minusculas, g para toda la oracion, m miltiples lineas o parrafos */
    var txtCifrado= txtCifrado.replace(/ober/igm,"o");
    var txtCifrado= txtCifrado.replace(/imes/igm,"i");
    var txtCifrado= txtCifrado.replace(/ai/igm,"a");
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");


    document.getElementById("img2").style.display="none";
    document.getElementById("textDerecha").style.display="none";
    document.getElementById("textDer").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit"
}

function copy(){
    var contenido= document.querySelector("#textDer");
    contenido.select();
    document.execCommand("copy");
    alert("¡SE COPIO EL TEXTO!");
}