var playerPrefab : GameObject;
var spawnObject : Transform;
 
var typeName : string = "UniqueGameName";
var gameName : string = "PokeBattleRoomName";
var refreshing : boolean = false;
var hostData : HostData[];
var readyToPlay: boolean = false; 

static function init () {

  Debug.Log("calling init");
  if(!Network.isClient && !Network.isServer) {
  
    //connect to a server
    hostData = getHostList();
    Network.Connect[hostData];
    //on failed to connect will simply create a new server
    

    
  }
 
 
}
 
 
static function Update () {

 	if(!readyToPlay) {
 		return;
	}
	GameManager.startPlay()
}
 
 
static function startServer () {
 
        Network.InitializeServer(32,25001, !Network.HavePublicAddress);
        MasterServer.RegisterHost(gameName, typeName, " this is some comment");
       
}
       
       
       
static function OnServerInitialized () {
 
        Debug.Log("server initialized");
        spawnPlayer();
       
       
}
 
static function OnConnectedToServer () {
 
        spawnPlayer();
 		readyToPlay = true;
 
}
 
static function spawnPlayer () {
 
        Network.Instantiate(playerPrefab, spawnObject.position, Quaternion.identity, 0);
 
}
 
static function OnMasterServerEvent(mse:MasterServerEvent) {
 
        if(mse == MasterServerEvent.RegistrationSucceeded) {
          Debug.Log("Registered Server");
       
        }
       
}

static function OnFailedToConnect(error: NetworkConnectionError)
{
  Debug.Log("Could not connect to the server: " + error + ", so I am creating a new server");
  startServer();
}
       
       
static function getHostList () {
 
        MasterServer.RequestHostList(gameName);
        yield WaitForSeconds(2);
        var localHostData : HostData[] = MasterServer.PollHostList();
  		return localHostData;
}