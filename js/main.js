//variables y eventos

var cocheRojo = document.getElementById('coche1');
document.addEventListener('keydown',avanzarRojo);
var avanceRojo = 0;
var nitro = 3;

var cocheAzul = document.getElementById('coche2');
var intervaloAzul =setInterval(avanzarAzul,500);
var avanceAzul = 0;

var cocheVerde = document.getElementById('coche3');
var intervaloVerde = setInterval(avanzarVerde,500);
var avanceVerde = 0;
var meta = document.getElementById('meta');
console.log(meta);

var posicionFinalRojo = 671;
var posicionFinalAzul = 687;
var posicionFinalVerde = 680;

//logica coche propio

function avanzarRojo(evento){
	console.log('tocando' + evento.keyCode);//con el keyCode podemos comprobar que tecla se esta tocando
	
	switch (evento.keyCode){
		case 32:
			avanceRojo += 10;
		break;
		case 78:
			if(nitro > 0 && nitro <=3){
			avanceRojo += 50;}
			nitro--
		break;
	}
	
			
		if(avanceRojo < posicionFinalRojo){
			cocheRojo.style.marginLeft = avanceRojo + 'px';
		}else {document.getElementById('mensaje').innerText = "Victoria coche rojo";
				clearInterval(intervaloVerde);
				clearInterval(intervaloAzul)}
	
}

//logica coches enemigos


function avanzarAzul(){
	var valor = Math.random()*80;
	avanceAzul += valor;
	
	if(avanceAzul < posicionFinalAzul){
			cocheAzul.style.marginLeft = avanceAzul + 'px';
	}else {document.getElementById('mensaje').innerText = "Victoria coche azul";
			document.removeEventListener('keydown',avanzarRojo);
			clearInterval(intervaloVerde);}
	
}



function avanzarVerde(){
	avanceVerde +=30;
	
	if(avanceVerde < posicionFinalVerde){
			cocheVerde.style.marginLeft = avanceVerde + 'px';
	}else {document.getElementById('mensaje').innerText = "Victoria coche verde ";
			document.removeEventListener('keydown',avanzarRojo);
			clearInterval(intervaloAzul);}
}






