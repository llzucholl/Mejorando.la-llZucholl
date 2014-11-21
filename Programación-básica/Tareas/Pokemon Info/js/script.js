function start(){
	var charmander = document.getElementById("charmander");
	charmander.addEventListener("click", descriCharmander);

	var pikachu = document.getElementById("pikachu");
	pikachu.addEventListener("click", descriPikachu);

	var squirtle = document.getElementById("squirtle");
	squirtle.addEventListener("click", descriSquirtle);

	var bulbasaur = document.getElementById("bulbasaur");
	bulbasaur.addEventListener("click", descriBulbasaur);
}

var Pokemon = function(n, t, d, a, de, i){
	this.nombre = n;
	this.tipo = t;
	this.debilidad = d;
	this.ataque = a;
	this.defensa = de;
	this.imagen = i;
};

Pokemon.prototype.descripcion = function(){

	var descripcionPokemon = document.getElementById("descripcionPokemon");
	var nombrePokemon = document.getElementById("nombrePokemon");

	nombrePokemon.innerHTML =this.nombre;
	descripcionPokemon.innerHTML ="Es un pokemon de tipo " + this.tipo + " su mayor debilidad es " + this.debilidad + "." + "<br>" + "su ataque es de " + this.ataque + " y su defensa es de " + this.defensa + ".";

}

var charmander = new Pokemon("Charmander", "fuego", "agua", "60", "33");
var pikachu = new Pokemon("Pikachu", "electrico", "tierra", "70", "35");
var squirtle = new Pokemon("Squirtle", "agua", "planta", "55", "40");
var bulbasaur = new Pokemon("Bulbasaur", "semilla", "fuego", "50", "32");

function descriCharmander(){
	var changeImg = document.getElementById("imagenPokemon");
	charmander.descripcion();
	changeImg.setAttribute("src", "img/charmander.png");
}

function descriPikachu(){
	var changeImg = document.getElementById("imagenPokemon");
	pikachu.descripcion();
	changeImg.setAttribute("src", "img/pikachu.png");

}

function descriSquirtle(){
	var changeImg = document.getElementById("imagenPokemon");
	squirtle.descripcion();
	changeImg.setAttribute("src", "img/squirtle.png");
}

function descriBulbasaur(){
	var changeImg = document.getElementById("imagenPokemon");
	bulbasaur.descripcion();
	changeImg.setAttribute("src", "img/bulbasaur.png");
}