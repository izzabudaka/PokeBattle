
static var pokemons = {};
static var playing : boolean; 
static var players : Player[] = [];

static function Start () {
	playing = false;
	pokemons = PokemonData.initPokemon();
	NetworkManager.init();
}

static function addPlayer(player: Player)
{
 	players.push(player);
 	player.assignPokemon(pokemons["golem"]);
}

static function addPersonalPokemon(player: Player, pokemon : Pokemon)
{	
	player.assignPokemon(pokemon);
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
	for(i = 0; i < players.length; i++)
		players[i].checkMovements();
}
