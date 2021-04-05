class Game {
    constructor(){
  this.display = createElement("h2");
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        console.log("GameState:"+gameState);
        form = new Form()
        form.display();
      }
    }

    play(){
     // console.log("PLAY")
      form.hide();
      background("white");
      var bg = createSprite(400,400);
      bg.addImage(bgImage);
      bg.velocityX = -4;
    //  console.log(bg.x)
      

    }
 
}