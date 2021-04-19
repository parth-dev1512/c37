class Player{
    constructor(){
  //properties for the player object - name, distance, index (1,2,3,4)
  this.name = null;
  this.distance = 0;
    this.index = null;
    
  }
    //read the playerCOunt
    readCount(){
      //referring
  var playerCountRef = database.ref('playerCount')
  
  //listening -->.on()
  playerCountRef.on("value",(data)=>{
  
    //store the listened info inside the playerCount
    playerCount = data.val()
  })
    }
  
    //update the playerCount
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      })
    }
  
    //update the name and distance of player
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
      })
    }

    //to get/ read the name and distance of the player and store it in the allPlayers variable
   static getPlayerInfo()
    {
      //referring
  var playerInfoRef = database.ref('players')
  
  //listening -->.on()
  playerInfoRef.on("value",(data)=>{
  
    //store the listened info inside the allPlayers
    allPlayers = data.val() 
    })
  }
}

//    gameState, 0, 
