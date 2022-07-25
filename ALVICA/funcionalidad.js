$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		 $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};


var nImagenes = 2;
var imagenes = new Array();
for(contador = 0; contador < nImagenes; contador++){
imagenes[contador] = "img/producto" + (contador + 1) + (".png");
}


var num=0;

function siguiente(){
var deslizador = document.getElementById("deslizador");
num++;
if(num >= imagenes.length){
num = 0;
}
deslizador.src=imagenes[num];
}

function previo(){
var deslizador = document.getElementById("deslizador");
num--;
if(num < 0){
num = imagenes.length-1;
}
deslizador.src=imagenes[num];
}
