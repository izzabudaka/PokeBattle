#pragma strict

var pokemon = new Array();
var moves = new Array();

moves["rollout"] = new MoveRollout();
moves["mega punch"] = new MoveMegaPunch();

pokemon["charizard"] = new Pokemon(
	"Charizard", 
	new Array(
		moves["rollout"], 
		moves["mega punch"]),
	"Fire");
