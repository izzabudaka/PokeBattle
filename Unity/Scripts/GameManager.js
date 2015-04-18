#pragma strict

var pokemons;
var playing : boolean; 
var players = [];

static function Start () {
	playing = false;
	pokemons = initPokemon();
	NetworkManager.init();
}

static function addPlayer(player: Player)
{
 	players.push(player);
 	player.addPersonalPokemon(pokemons["golem"]);
}

static function addPersonalPokemon(pokemon : Pokemon)
{
	
	player.assignPokemon(pokmeon);
}
static function startPlay()
{
	playing = true;
}
static function getPlayers(){
	return players;
}
static function Update () {
	if(!playing)
		return;
	players.forEach(function(player) {
		player.checkMovements(); // players = list players curr in the game
	}
}
