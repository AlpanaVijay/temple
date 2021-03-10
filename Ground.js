class Ground{
    constructor(){
        this.x = 300;
        this.y = 350;
        this.width = 1500;
        this.height = 20;
    
        this.ground = createSprite (this.x,this.y,this.width,this.height);
      //  this.ground.visible = false;
    }
    display() {
     

      this.ground.velocityX = -3;

      if (this.ground.x < 0){
       this.ground.x = this.ground.width/2;
      }
    }
   
           
 }