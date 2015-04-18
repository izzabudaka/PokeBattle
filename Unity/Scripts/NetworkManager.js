var playerPrefab : GameObject;
var spawnObject : Transform;
 
var typeName : String = "UniqueGameName";
var gameName : String = "PokeBattleRoomName";
var refreshing : boolean = false;
var hostData : HostData[];
var readyToPlay: boolean = false; 

function init () {

  Debug.Log("calling init");
  //hostData = new Array(10);
  if(!Network.isClient && !Network.isServer) {
  	
    //connect to a server
    MasterServer.RequestHostList(gameName);
    yield WaitForSeconds(7);
    hostData = MasterServer.PollHostList();
	Debug.Log("hostData length is " + hostData.Length);
	
    try {
    	Network.Connect(hostData[0], "");
    }
    catch(exception)
    {
    	Debug.Log("exception is " + exception);
    	startServer();
    }
    
	MasterServer.RequestHostList(gameName);
    yield WaitForSeconds(7);
    hostData = MasterServer.PollHostList();
	Debug.Log("hostData length is " + hostData.Length);
    //on failed to connect will simply create a new server
    

    
  }
 
 
}
 
 
function Update () {

 	if(!readyToPlay) {
 		return;
	}
	GameManager.startPlay();
}
 
 
function startServer () {
        Network.InitializeServer(2,25002, !Network.HavePublicAddress);
 		Debug.Log("starting server");
        MasterServer.RegisterHost(gameName, typeName, " this is some comment");
       
}
       
       
       
function OnServerInitialized () {
 
        Debug.Log("server initialized");
        spawnPlayer();
       
       
}
 
function OnConnectedToServer () {
 
        spawnPlayer();
 		readyToPlay = true;
 
}
 
function spawnPlayer () {
 
        Network.Instantiate(playerPrefab, spawnObject.position, Quaternion.identity, 0);
 
}
 
function OnMasterServerEvent(mse:MasterServerEvent) {
 		Debug.Log("OnMasterServerEvent called");
        if(mse == MasterServerEvent.RegistrationSucceeded) {
          Debug.Log("Registered Server");
       
        }
       
}

function OnFailedToConnect(error: NetworkConnectionError)
{
  Debug.Log("Could not connect to the server: " + error + ", so I am creating a new server");
  startServer();
}
       
       
function getHostList () {
 
        MasterServer.RequestHostList(gameName);
        Debug.Log("waiting for host list");
        yield WaitForSeconds(2);
}