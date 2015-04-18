static function initPokemon(){
	var pokemon = {};
	var moves = {};
	
	moves["rollout"] = new doAction("rollout", 60);
	moves["mega punch"] = new doAction("mega punch", 60);
	moves["earthquake"] = new doAction("earthquake", 100);
	moves["slash"] = new doAction("slash", 70);
	moves["aura sphere"] = new doAction("aura sphere", 60);

	pokemon["charizard"] = new Pokemon(
		"Charizard",
		[moves["slash"]],
		"Fire");
	pokemon["golem"] = new Pokemon(
		"Golem", 
		[
			moves["rollout"],
			moves["mega punch"],
			moves["earthquake"]],
		"Rock");
	pokemon["lucario"] = new Pokemon(
		"Lucario", 
		[
			moves["aura sphere"]],
		"fighting");
		
	return pokemon;
}