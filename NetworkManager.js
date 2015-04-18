var playerPrefab: GameObject;
var spawnObject: Transform;

var gameName: String = "PokeBattleGameName";

private var refreshing: boolean = false;
private var hostData: HostData[];

function OnGUI()
{
	if (!Network.isClient && !Network.isServer) {
				
		Debug.Log("kurwaaa");
		startServer();
	}
}
function startServer(){
	Debug.Log ("start server function");
	Network.InitializeServer(2, 25002, !Network.HavePublicAddress);
	MasterServer.RegisterHost(gameName, "PokeBattleGame", "comment");
	
}

function onServerInitialized () {
	Debug.Log("Server initialized");
	spawnPlayer();
	
}

function onConnectedToServer() {
	spawnPlayer();

}

function spawnPlayer() {
	Network.Instantiate	(playerPrefab, spawnObject.position, Quaternion.identity, 0);
}
	
function OnMasterServerEvent(mse:MasterServerEvent) {
 
        if(mse == MasterServerEvent.RegistrationSucceeded) {
        Debug.Log("Registered Server");
       
        }
       
}
       
       
function refreshHostList () {
 
        MasterServer.RequestHostList(gameName);
        refreshing = true;
        
}
