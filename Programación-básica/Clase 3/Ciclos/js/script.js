// 
// 
// 
var c, t, b;
 function inicio(){
 	c = document.getElementById("caja");
 	t = document.getElementById("alejandra");
 	b = document.getElementById("botoncito");

 	b.addEventListener("click", calcular);

 	function calcular(){
 		var numero = Number(t.value);
 		var calculo = 1;
 		
 		for(var n = 1; n <= numero; n++){
 			calculo = calculo * n;
 		}

 		// while(n <= numero){
 		// 	calculo = calculo * n;
 		// 	n++;
 		// }
 		c.innerHTML = "<em>" + calculo + "</em>";
 	}


 	// var numero = 1;
 	// var residuo;
 	
 	// while (numero <= 50){
 	// 	residuo = numero % 2;
 	
 	// 	if (residuo == 0) {
 	// 		c.innerHTML += " " + numero;
 	// 	}
 	// 	numero++;
 	// }

 	// c.innerHTML = "A";
 	// var gritos = 0;
 	// while(gritos < 10){
 	// 	c.innerHTML += "a";
 	// 	gritos++;
 	// }
 	// c.innerHTML += "gh!";
 }