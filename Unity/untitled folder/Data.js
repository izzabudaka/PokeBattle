#pragma strict


var obj : GameObject[] = [];
function Start () {
	GameManager.netMng.setData(this);
}
function getPrefab() : GameObject
{
	return obj[GameManager.players.Length - 1];
}

function Update () {

}