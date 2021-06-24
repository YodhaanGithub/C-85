canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_x=10;
car_y=10;

car_img="car1.png";
background_img="Background.jpg";

car_width="150";
car_height="80";

function add(){
    bgimg=new Image();
    bgimg.onload=uploudbg;
    bgimg.src=background_img;  
    
    carimg=new Image();
    carimg.onload=uploudcar;
    carimg.src=car_img;   
}

function uploudbg(){
    ctx.drawImage(bgimg,0,0, canvas.width, canvas.height);
}

function uploudcar(){
    ctx.drawImage(carimg, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown",my_keydown)

function  my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
         up(); 
        console.log("up arrow key");
    }
    if (keyPressed == '40'){
        down();
        console.log("down arrow key");
    }
    if (keyPressed == '37'){
        left();
        console.log("left arrow key");
    }
    if (keyPressed == '39'){
         right();
         console.log("right arrow key");
    }

}
   

function down(){
    if (car_y<=700 )
        car_y+=10;
        console.log("When the down key is pressed x="+ car_x +"| y=" + car_y );
        uploudbg();
        uploudcar();
    };
    function up(){
        if (car_y>=0 ) {
            car_y-=10;
            console.log("When the up key is pressed x="+ car_x +"| y=" + car_y );
            uploudbg();
            uploudcar();
        }
        };
        function right(){
            if (car_x<=1000 ){
                car_x+=10;
                console.log("When the right key is pressed x="+ car_x +"| y=" + car_y );
                uploudbg();
                uploudcar();
            }
            };
    
            
            function left(){
                if (car_x>=0 ){
                    car_x-=10;
                    console.log("When the left key is pressed x="+ car_x +"| y=" + car_y );
                    uploudbg();
                    uploudcar();
                }
                };
                
            