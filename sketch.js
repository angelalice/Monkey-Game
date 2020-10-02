
  var monkey, monkey_running, ground;
  var banana, bananaImage, FoodGroup;
  var obstacle, obstacleImage, obstacleGroup, score = 0, survivalTime=0;
    
  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");
  }

  function setup() {
    //createCanvas(400,400);
    
    
    
    monkey= createSprite(80,315,20,20);
    monkey.addAnimation("monkey_running",monkey_running);
    monkey.scale=0.1;
    
    ground= createSprite(400,350,900,10);
    ground.velocityX= -4;
    ground.x=ground.width/2;
    console.log(ground.x);
    
    bananaGroup= new Group()
    obstacleGroup= new Group();

  }


  function draw() {
    background("white");
  
   // making the ground move
    if(ground.x<0||ground.x>400){
       ground.x= ground.width/2;
    }

   //making the monkey jump
    if(keyDown("space")){
      monkey.velocityY= -7;
    }
  
    //giving monkey gravity
    monkey.velocityY= monkey.velocityY + 0.8;
    
    monkey.collide(ground);
    
    food();
    obstacles();
    
    drawSprites();
    
    stroke("white");
    textSize(20);
    fill("white");
    

    if(obstacleGroup.isTouching(monkey)){
      ground.velocityX=0;
      monkey.velocityY = 0;
      obstacleGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);
    }
    
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime= Math.ceil(frameCount/frameRate());
    text("Survival Time:"+survivalTime,100,50);
   }

  function food(){
      
      if(frameCount % 80===0){
        var banana = createSprite(600,250,40,10);
        banana.y = random(120,200);    
        banana.velocityX = -5;  
        banana.lifetime=200;
        bananaGroup.add(banana); 
        monkey.depth= banana.depth+1;
        
        banana.addImage(bananaImage);
        banana.scale=0.1;
       }
      }






  function obstacles(){
   
    if(frameCount % 300===0){
     var obstacle= createSprite(600,320,60,20);
      obstacle.addImage(obstacleImage);
      obstacle.lifetime= 300;  
      obstacleGroup.add(obstacle);
      obstacle.velocityX= -6;
      obstacle.scale=0.15;
     }
  }


  

  
