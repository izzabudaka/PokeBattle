#pragma strict

var List<Pokemon> pokemons;
var playing : boolean; 
var players = [];

static function Start () {
	playing = false;
	NetworkManager.init();
}

static function addPlayer(player: Player)
{
 	players.push(player);
 	player.addPersonalPokemon(new Pokemon("Golem", [], "Rock"));
}

static function addPersonalPokemon(pokemon : Pokemon)
{
	player.assignPokemon(pokmeon);
}
static function startPlay()
{
	playing = true;
}
	
static function Update () {
	if(!playing)
		return;
	players.forEach(function(player) {
		player.checkmovenets(); // players = list players curr in the game
	}
}
