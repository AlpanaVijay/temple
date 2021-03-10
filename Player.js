class Player{
   constructor(a,b){
       this.x = a;
       this.y = b;
       this.width = 50;
       this.height = 100;
       this.image = loadImage ("mario00.png")
       this.player = createSprite (this.x,this.y,this.width,this.height);
       this.player.addImage(this.image);
   }

   display() {

     this.player.scale = 0.5;
     this.player.velocityY = this.player.velocityY + 0.8;
   }

   jump(){
    
    this.player.velocityY = -12;
    
     }
   }