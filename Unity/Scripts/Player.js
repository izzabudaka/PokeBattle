#pragma strict

var life = 100;
var speed = 1;
var pokemon;
function Start () {
	GameManager.addPlayer(this);
}


function checkMovements()
{
	if(Input.GetKey(KeyCode.W))
		move(0);
		
    if(Input.GetKey(KeyCode.A))
    	move(1);

    if(Input.GetKey(KeyCode.S))
    	move(2);

    if(Input.GetKey(KeyCode.D))
    	move(3);
}

function assignPokemon(pokemon: Pokemon)
{
	this.pokemon = pokemon;
}

function move(int id)
{
	var animationComp : Animation;
	animationComp.Play(pokemon.moveList[id].name);	
}