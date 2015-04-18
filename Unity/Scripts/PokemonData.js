#pragma strict

function initPokemon(){
	var pokemon = new Array();
	var moves = new Array();
	
	moves["rollout"] = new MoveRollout();
	moves["mega punch"] = new MoveMegaPunch();
	moves["earthquake"] = new MoveEarthquake();
	moves["slash"] = new MoveSlash();
	moves["aura sphere"] = new MoveAura();

	pokemon["charizard"] = new Pokemon(
		"Charizard", 
		new Array(
			moves["slash"]),
		"Fire");
	pokemon["golem"] = new Pokemon(
		"Golem", 
		new Array(
			moves["rollout"],
			moves["mega punch"],
			moves["earthquake"]),
		"Rock");
	pokemon["lucario"] = new Pokemon(
		"Lucario", 
		new Array(
			moves["aura sphere"]),
		"fighting");
		
	return pokemon;
}
