

//--------PRIMER METODO PARA COPIAR------
/*const $content = document.getElementById('resultado'),
      $btn = document.getElementById('copiarTxt');
      
      $btn.addEventListener('click', e =>{
        $content.select();
        document.execCommand('copy'); 
      })*/
      
 ///------------SEGUNDO METODO PARA COPIAR--------
   function copiarPortapapeles(){
    var copiado = document.getElementById('resultado');
    copiado.select();
    document.execCommand('copy');  
}
 
 copiarTxt.onclick = copiarPortapapeles;