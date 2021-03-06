const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];

var bruce;
var bruceAni;

var city;
var bg;

var thunder, thunder1,thunder2,thunder3,thunder4;
var rand;


var rainSound;

function preload(){

bruceAni = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png",
"images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png",
"images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png",)

bg = loadImage("background.jpg");

thunder1 = loadImage("images/thunderbolt/1.png");
thunder2 = loadImage("images/thunderbolt/2.png");
thunder3 = loadImage("images/thunderbolt/3.png");
thunder4 = loadImage("images/thunderbolt/4.png");

rainSound = loadSound("rain-and-thunder.wav")

}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(800,700)

rainSound.play();
rainSound.loop();    

city = createSprite(800,350,800,700);
city.addImage(bg)
city.scale=3;
city.velocityX = -2;

if(frameCount % 200 === 0){

    for(var i=0; i<50; i++){
        drops.push(new WaterDrops(random(0,800), random(0,800)));
    }

}


bruce = createSprite(400,525,50,100);
bruce.addAnimation("rain",bruceAni)
bruce.scale=0.5

umbrella = new Umbrella(400,435)

}

function draw(){
Engine.update(engine)

background("blue");
drawSprites();

if(city.x<0){
city.x = 800
}

    //displaying rain drops
 for(var i = 0; i<50; i++){
    drops[i].display();
    drops[i].update_Y_Position();
        
    }

    // creating and displaying the thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
       thunderDuration=frameCount;
        thunder = createSprite(random(10,770), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 60;
    }

 
    
umbrella.display();

}