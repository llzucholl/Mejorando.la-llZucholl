function start(){
	var juega = document.getElementById("juega");
	juega.addEventListener("click", play, false);
}

function play(){
	var piedra = 1;
	var papel = 2;
	var tijera = 3;
	var lagarto = 4;
	var spock = 5;

	var usuarioElige = prompt("Que eliges:\n"+"-Piedra = 1\n"+"-Papel = 2\n"+"-Tijera = 3\n"+"-Lagarto = 4\n"+"-Spock = 5");
	var maquinaElige = Math.floor(Math.random()*5 + 1);

	if (usuarioElige == piedra){
		if (maquinaElige == piedra){
			alert("La maquina eligió Piedra");
			alert("Ambos eligieron piedra D:\n" + "Es un empate!");
		}
		if (maquinaElige == papel){
			alert("La maquina eligió Papel");
			alert("Fuiste Cubierto por papel!\n" + "Perdiste!");
		}
		if (maquinaElige == tijera){
			alert("La maquina eligió Tijera");
			alert("Aplastaste a las tijeras!\n" + "Ganaste!");
		}
		if (maquinaElige == lagarto){
			alert("La maquina eligió Lagarto");
			alert("Aplastaste al lagarto!\n"+"Ganaste!");
		}
		if (maquinaElige == spock){
			alert("La maquina eligió Spock");
			alert("Fuiste vaporizado!");
		}
	}
    if (usuarioElige == papel){
 		if (maquinaElige == piedra){
 			alert("La maquina eligió Piedra");
 			alert("Cubriste a la piedra!\n" + "Ganaste!");
 		}
 		if (maquinaElige == papel){
 			alert("La maquina eligió Papel");
 			alert("Ambos eligieron papel!\n" + "Es un empate!");
 		}
 		if (maquinaElige == tijera){
 			alert("La maquina eligió Tijera");
 			alert("Fuiste cortado! D:\n" + "Perdiste!");
 		}
 		if (maquinaElige == lagarto){
 			alert("La maquina eligió Lagarto");
 			alert("Fuiste comido por el lagarto!\n"+"Perdiste!");
 		}
 		if (maquinaElige == spock){
 			alert("La maquina eligió Spock");
 			alert("Refutaste a Spock!\n"+"Ganaste!");
 		}
 	}
 	if (usuarioElige == tijera){
 		if (maquinaElige == piedra){
 			alert("La maquina eligió Piedra");
 			alert("Fuiste aplastado por la Piedra!\n" + "Perdiste!");
 		}
 		if (maquinaElige == papel){
 			alert("La maquina eligió Papel");
 			alert("Cortaste el papel!\n" + "Ganaste!");
 		}
 		if (maquinaElige == tijera){
 			alert("La maquina eligió Tijera");
 			alert("Ambos eligieron tijera\n" + "Es un empate!");
 		}
 		if (maquinaElige == lagarto){
 			alert("La maquina eligió Lagarto");
 			alert("Decapitaste al Lagarto!\n"+"Ganaste!");
 		}
 		if (maquinaElige == spock){
 			alert("La maquina eligió Spock");
 			alert("Fuiste aplastado por Spock!\n"+"Perdiste!");
 		}
 	}
 	if (usuarioElige == lagarto){
 		if (maquinaElige == piedra){
 			alert("La maquina eligió Piedra");
 			alert("Fuiste aplastado por la Piedra!\n" + "Perdiste!");
 		}
 		if (maquinaElige == papel){
 			alert("La maquina eligió Papel");
 			alert("Te comiste el Papel!\n" + "Ganaste!");
 		}
 		if (maquinaElige == tijera){
 			alert("La maquina eligió Tijera");
 			alert("Fuiste decapitado por la Tijera! D:\n" + "Perdiste!");
 		}
 		if (maquinaElige == lagarto){
 			alert("La maquina eligió Lagarto");
 			alert("Ambos eligieron Lagarto!\n"+"Te reencontraste con tu familiar lagarto perdido y hicieron una fiesta de bienvendida! :'D");
 		}
 		if (maquinaElige == spock){
 			alert("La maquina eligió Spock");
 			alert("Envenenaste a Spock!\n"+"Ganaste!");
 		}
 	}
 	if (usuarioElige == spock){
 		if (maquinaElige == piedra){
 			alert("La maquina eligió Piedra");
 			alert("Vaporizaste a la Piedra!\n" + "Ganaste!");
 		}
 		if (maquinaElige == papel){
 			alert("La maquina eligió Papel");
 			alert("Fuiste refutado por el papel! D:\n" + "Perdiste!");
 		}
 		if (maquinaElige == tijera){
 			alert("La maquina eligió Tijera");
 			alert("Aplastaste a las Tijeras!\n" + "Ganaste!");
 		}
 		if (maquinaElige == lagarto){
 			alert("La maquina eligió Lagarto");
 			alert("Fuiste envenenado por el Lagarto!\n"+"Perdiste!");
 		}
 		if (maquinaElige == spock){
 			alert("La maquina eligió Spock");
 			alert("Ambos eligieron a Spock!\n"+"Se encontraron emotivamente y se fueron a una convención de Star Trek!");
 		}
 	}
 		if(usuarioElige >= 6 || usuarioElige == 0){
 			alert("Elige un numero valido!");
 		}
}