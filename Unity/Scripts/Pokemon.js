
var pokeName; 
var moveList;
var pokeType;
var HP;


function Pokemon(pokeName:String, moveList, pokeType:String) {
  this.HP = 100;
  this.pokeName = pokeName;
  this.moveList = moveList;
  this.pokeType = pokeType;
  this.damaged = ;
  this.idle = ;
}

function damage(move:Move, pokemon: Pokemon){
	// PLAY DAMAGE ANIMATION
	this.HP -= move.power;
}
function move(int id, opponent: Player)
{
	var animationComp : Animation;
	animationComp.Play(moveList[id].name);
	opponent.pokemon.damage(this.moveList[id], this);	
}
