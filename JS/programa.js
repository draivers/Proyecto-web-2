function cambiarcolor(){
var x =document.getElementById("titulo");
x.style.color = 'white';
x.style.background = 'black';
}
function restablecercolor(){
    var x =document.getElementById("titulo");
    x.style.color = 'black';
    x.style.background = 'bisque';
}
 
function obtenerpareseimpares(){
var numero40 = parseInt(document.getElementById('numero40').value);
if(numero40 < 1000 || numero40 > 9999){
    alert("el numero no es de 4 digitos, intente nuevamente");
}
}