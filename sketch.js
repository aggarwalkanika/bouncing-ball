var x=0;
var y=0;
function setup()
{
    createCanvas(600,200);
    
}
function draw(){
    background(0);
    ellipse(x,y,30,30);
    if(y<height && x<height){
        x+=1;
       y+=1; 
   }
   else
   {
       x+=1;
       y-=1;
   }
   
}