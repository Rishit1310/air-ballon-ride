var ball;
var database;
var balloon1,balloon2,bg;
function preload(){
    balloon1=loadImage("hotairballoon3.png")
    bg=loadImage("cityimage.png")
}
function setup(){
    database=firebase.database()
    createCanvas(1500,700);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    data=database.ref("ball/position")
    data.on("value",read)
    ball.addImage(balloon1);
    ball.scale=0.5

}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        write(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write(5,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-5);
        ball.scale=ball.scale-0.007
        }
    else if(keyDown(DOWN_ARROW)){
        write(0,+5);
        ball.scale=ball.scale+0.007
    }
    drawSprites();
    fill(0);
    stroke("white");
    textSize(25);
    text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function read(d){
pos=d.val()
ball.x=pos.x
ball.y=pos.y
}

function write(x,y){
database.ref("ball/position").set({
    x:x+pos.x,
    y:y+pos.y
    
})
    
    


}