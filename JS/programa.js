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
var cantidadpares =0;
var cantidadimpares =0;
var cantidadceros =0;
var digito =0;
var numero40 = parseInt(document.getElementById('numero40').value);
if(numero40 < 1000 || numero40 > 9999){
    alert("el numero no es de 4 digitos, intente nuevamente");
}
else{
         digito =parseInt (numero40/1000);
        if(digito%2 === 0){
            cantidadpares++;
        }else{
            if(digito%2 === 1){
             cantidadimpares++;
        }else{
                cantidadceros++;
            }
        }
         digito =parseInt (numero40)
        
        }
}