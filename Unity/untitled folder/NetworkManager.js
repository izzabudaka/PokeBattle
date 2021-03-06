var playerPrefab : GameObject;
var spawnObject : Transform;
 
var typeName : String = "UniquePokeBattleGameName";
var gameName : String = "PokeBattleRoomName";
var refreshing : boolean = false;
var hostData : HostData[];
var readyToPlay: boolean = false; 
var data : Data;

function setData(data: Data) {
	this.data = data;
}
function init () {

  Debug.Log("calling init");
  //hostData = new Array(10);
  if(!Network.isClient && !Network.isServer) {
  	
  	startServer();
  	
  	
    //connect to a server
    MasterServer.RequestHostList(gameName);
    yield WaitForSeconds(7);
    hostData = MasterServer.PollHostList();
	Debug.Log("hostData length is " + hostData.Length);
	
    try {
    	Network.Connect(hostData[0], "");
    }
    catch(exception) {
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
        //spawnPlayer();
       
       
}
 
function OnConnectedToServer () {
 		Debug.Log("Client connected to server");
        spawnPlayer();
 		readyToPlay = true;
 
}
 
function spawnPlayer () {
		Debug.Log("spawnPlayer called");	
 		var prefab = data.getPrefab();
        Network.Instantiate(prefab, spawnObject.position, Quaternion.identity, 0);
 
}
 
function OnMasterServerEvent(mse:MasterServerEvent) {
 		Debug.Log("OnMasterServerEvent called");
        if(mse == MasterServerEvent.RegistrationSucceeded) {
          Debug.Log("Registered Server");
       
        }
       
}

 
 function OnDisconnectedFromServer(info : NetworkDisconnection) {
     Debug.Log("This SERVER OR CLIENT has disconnected from a server");
 }
 
 function OnFailedToConnect(error: NetworkConnectionError){
     Debug.Log("Could not connect to server: "+ error);
 }
 
 
 //Server functions called by Unity
 function OnPlayerConnected(player: NetworkPlayer) {
     Debug.Log("Player connected from: " + player.ipAddress +":" + player.port);
 }
 

 
 function OnPlayerDisconnected(player: NetworkPlayer) {
     Debug.Log("Player disconnected from: " + player.ipAddress+":" + player.port);
 }
 
 
 function OnFailedToConnectToMasterServer(info: NetworkConnectionError){
     Debug.Log("Could not connect to master server: "+ info);
 }
 
 function OnNetworkInstantiate (info : NetworkMessageInfo) {
     Debug.Log("New object instantiated by " + info.sender);
 }