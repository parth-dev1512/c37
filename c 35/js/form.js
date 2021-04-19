class Form
{
    constructor()
    {
        //properties - button, input, greeting
        this.input = createInput('Name');
        this.greeting = createElement('h2')
        this.button = createButton('Play');
    }

    //to hide the input, button and element

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
/*arrow function    =>
()=>{

}

*/
    display()
    {
        //element inside var title
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,10);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
 
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=> 
        {
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount+=1;

            player.index = playerCount; //if player2(player.index) has logged in, it means that the no of players(playerCount) is 2

            player.updateCount(playerCount);
            player.update();
            
            this.greeting.html("Hello"+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            
        })
        

    }
}