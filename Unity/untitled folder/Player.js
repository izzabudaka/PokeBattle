var life = 100;
var speed = 1;
var pokemon : Pokemon;

function Start () {
	GameManager.addPlayer(this);
}


function checkMovements()
{
	var players = GameManager.getPlayers();
	players.remove(this);
	if(Input.GetKey(KeyCode.W))
		pokemon.move(0, players[0]);
		
    if(Input.GetKey(KeyCode.A))
    	pokemon.move(1, players[0]);

    if(Input.GetKey(KeyCode.S))
    	pokemon.move(2, players[0]);

    if(Input.GetKey(KeyCode.D))
    	pokemon.move(3, players[0]);
}

function assignPokemon(pokemon: Pokemon)
{
	this.pokemon = pokemon;
	// CREATE THE POKEMON
}