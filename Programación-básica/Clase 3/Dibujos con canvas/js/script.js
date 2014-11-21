var dibujo, lienzo;
function inicio(){
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	dibujarGrilla(lienzo);



	lienzo.beginPath();
	lienzo.strokeStyle = "red";
	lienzo.arc(150,150,100, Math.PI*2,false);
	lienzo.stroke();
	lienzo.closePath();
}
function dibujarGrilla(pony){
	var ancho = 300, alto = 300;
	var anchoLinea = 30;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;
	var linea, punto;
	
	for(linea = 0; linea <= limiteX; linea++){
		punto = linea*anchoLinea;
		pony.beginPath();
		pony.strokeStyle = "#AAA";
		pony.moveTo(punto,0);
		pony.lineTo(punto,300);
		pony.stroke();
		pony.closePath();
	} 

	for(linea = 0; linea <= limiteY; linea++){
		punto = linea*anchoLinea;
		pony.beginPath();
		pony.strokeStyle = "#AAA";
		pony.moveTo(0,punto);
		pony.lineTo(alto,punto);
		pony.stroke();
		pony.closePath();
	}
}