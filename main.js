canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car2_x=10;
car2_y=10;
car2_width=75;
car2_height=100;


//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = greencar_image;
}

function uploadBackground() {
    
    ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
   if(car2_y>0){
       car2_y=car2_y-10;
       console.log("when_up_arrow_is_pressed"+car2_x+car2_y);
       uploadBackground();
       uploadrover();


   }
}

function down()
{
   if(car2_y<=500){
       car2_y=car2_y+10;
       console.log("when_down_arrow_is_pressed"+car2_x+car2_y);
       uploadBackground();
       uploadrover();
       

   }
}

function left()
{
   if(car2_x>=0){
	car2_x=car2_x-10;
       console.log("when_left_arrow_is_pressed"+car2_x+car2_y);
       uploadBackground();
       uploadrover();
       

   }
}

function right()
{
   if(car2_x<=700){
	car2_x=car2_x+10;
       console.log("when_right_arrow_is_pressed"+car2_x+car2_y);
       uploadBackground();
       uploadrover();
       

   }
}