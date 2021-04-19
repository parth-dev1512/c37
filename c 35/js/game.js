class Game
{
    constructor()
    {
        
    }

    //read gameSate

    readState()
    {
        var gameStateRef = database.ref('gameState')

        gameStateRef.on("value",function(data)
        {
            gameState = data.val()
            
        })
    }

    //update the state

    update(state)
    {
        database.ref('/').update({
            gameState: state
        })
    }

    async wait()
    {
        if(gameState === 0 ){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value")
        if(playerCountRef.exists())
        {
            playerCount=playerCountRef.val();
            player.readCount();
        }

        

        form = new Form();
        form.display();

        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        
        cars=[car1,car2,car3,car4];
        //index => position of each item in the array [index0,index1,index2,index3]
    }
    play()
    {
    form.hide();
    

    //use the className.functionName() for static functions
    Player.getPlayerInfo();

    
    
    if(allPlayers!==undefined){         //database values = defined values              //not wrong = correct       //defined = not undefined
    
    //create a variable called 'index' and assign it to 0
    var index=0;

    //create variables 'x' and 'y' to store the x and y positions of the car
    var x=0;
    var y;

        
        for(var i in allPlayers){       //every single player inside allPlayers

        //increase the index when the loop repeats
        index+=1;

        //the x position of each car has to be 200 pixels away from the previous car
            x+=200;
            y=displayHeight-allPlayers[i].distance;

        //to assign the each car's x and y positions to the variables 'x' and 'y'
            /*
            car.x = x;
            car.y = y
            */
            cars[index-1].x = x;
            cars[index-1].y = y;
            if(index === player.index){       //if car1 belongs to player1
                //car.shapeColor = "red"
            cars[index-1].shapeColor="red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
            }

            else{
              //car.shapeColor = "black"   
            cars[index-1].shapeColor="black";
            }


           

            }
    }

    if(keyIsDown(UP_ARROW) && player.index!==null){
        player.distance += 50;
        player.update(); 
    }
    drawSprites();
    }
}