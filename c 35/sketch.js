var database;
var gameState = 0;
var playerCount;
var form,game,player;
var distance = 0
var allPlayers;     //to store the information (name & distance ) of all 4 players
var car1,car2,car3,car4,cars;

function setup()
{
    createCanvas(displayWidth-20, displayHeight-30);
    database=firebase.database();
    game =new Game();
    game.readState();
    game.wait();
  
}
function draw()
{
    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

}