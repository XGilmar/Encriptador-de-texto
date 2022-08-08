
var btnEncript = document.querySelector("#btn1");
var btnDesencript = document.querySelector("#btn2");

let btnClear = document.querySelector('#eliminarTxt');
let textarea = document.querySelectorAll('textarea');


//evento limpiar texto
btnClear.addEventListener('click', () => {
  textarea.forEach(textarea => textarea.value = '')
});


function encriptar (){
  var texto = document.querySelector("#introducir-texto").value;
  var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#resultado").value = textoCifrado;
    document.querySelector("#introducir-texto").value;
    }
    
function desencriptar (){ 
  var texto = document.querySelector("#introducir-texto").value;
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#resultado").value = textoCifrado;
    document.querySelector("#introducir-texto").value;
}

    btnEncript.onclick = encriptar;
    btnDesencript.onclick = desencriptar;