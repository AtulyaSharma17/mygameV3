class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.score = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  updateWStatus(Status){
    database.ref('/').update({
      wallet: Status
    });
  }

  updateAStatus(Status){
    database.ref('/').update({
      apple: Status
    });
  }

  updateCStatus(Status){
    database.ref('/').update({
      carkey: Status
    });
  }

  updatePStatus(Status){
    database.ref('/').update({
      phone: Status
    });
  }

  updateCAStatus(Status){
    database.ref('/').update({
      camera: Status
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

 // getCarsAtEnd(){
  //  database.ref('carsAtEnd').on ("value", (data)=>{
   //   this.rank = data.val()
   // })

  }

  //static updateCarsAtEnd(rank){
   // database.ref('/').update({
   //   carsAtEnd:rank  
  //  })

  ////}



//}
