class Pokemon {
	var pokeName; 
	var moveList;
	var pokeType;
	var HP;
	function move(id:int, opponent: Player){
		var animationComp : Animation;
		animationComp.Play(moveList[id].name);
		opponent.pokemon.damage(this.moveList[id], this);
	}
	function damage(move:doAction, pokemon: Pokemon){
		// PLAY DAMAGE ANIMATION
		this.HP -= move.power;
	}
	

	function Pokemon(pokeName:String, moveList:Object[], pokeType:String) {
	  this.HP = 100;
	  this.pokeName = pokeName;
	  this.moveList = moveList;
	  this.pokeType = pokeType;
	//  this.damaged = ;
	//  this.idle = ;
	}
}
