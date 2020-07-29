/*
	Called at the start, when the loading screen finishes loading all assets.
	
	serverName - Server's name.
		Convar: hostname
		For exmaple: "Garry's Mod Server"
	serverURL - URL for the loading screen. 
		Convar: sv_loadingurl
		For example: "http://mywebsite.com/myloadingscreen.html"
	mapName - The name of the map the server is playing. 
		For example: "cs_office"
	maxPlayers - Maximum number of players for the server.
		Convar: maxplayers
	steamID - 64-bit, numeric Steam community ID of the client joining. 
		For example: 76561198012345678
	gamemode - The gamemode the server is currently playing. 
		Convar: gamemode
		For example: "deathrun"
	volume - The value of the player's in-game 'volume' console variable, from 0 to 1
	language - The value of the player's in-game 'gmod_language' console variable, a two letter representation of the player's main menu language
*/
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {}
/*
	Called at the start

	total- Total number of files the client will have to download.
*/
function SetFilesTotal( total ) {}
/*
	Called when the client starts downloading a file.

	fileName- The full path and name of the file the client is downloading.
		This path represents the resource's location rather than the actual file's location on the server.
		For example, the file "garrysmod/addons/myAddon/materials/models/bobsModels/car.mdl" will be:
			"materials/models/bobsModels/car.mdl"
*/
function DownloadingFile( fileName ) {}
/*
	Called when the client's joining status changes.

	status- Current joining status.
		For example: "Sending client info..."

	Under normal conditions this would not be fired until game client starts interacting with server files/workshop. This
	means you probably can't use "Retrieving server info" and everything that goes before downloads.
*/
function SetStatusChanged( status ) {}
/*
	Called when the number of files remaining for the client to download changes.

	needed- Number of files left for the client to download.
*/
function SetFilesNeeded( needed ) {}
