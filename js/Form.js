class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.info = createElement ('h3')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.info.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Clue Hunt")
    this.title.position(displayWidth/2 - 50, 0);
   
    

    this.info.html("Instructions:<br/> 1. Find all the hidden things using the clues provided <br/>   2. Find the things before the other player and win <br/>  Good Luck Have Fun ")
    this.info.position(displayWidth/2 - 100 , displayHeight/2 - 100 )
    
    this.input.position(displayWidth/2 - 40 , displayHeight -300 );
    this.button.position(displayWidth/2 + 30, displayHeight -250);
    this.reset.position(100,50)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

      sound.loop()
      sound.setVolume(0.5)
    });

    this.reset.mousePressed(()=>{
    game.update(0)
    player.updateCount(0)
    player.updateWStatus(true);
    player.updateAStatus(true);
    player.updateCStatus(true);
    player.updatePStatus(true);
    player.updateCAStatus(true);
    
    })
  
  }
}
