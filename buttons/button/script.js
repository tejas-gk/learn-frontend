const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const width=window.innerWidth;
const height=window.innerHeight;

//measure buttons
const buttonElement=document.querySelectorAll('button');
let buttonMeasurements=[];
function measureButtons(){
    buttonMeasurements=[];
   buttonsElement.forEach(button=>{
       const buttonWidth=button.offsetWidth;
       const buttonHeight=button.offsetHeight;
       const buttonLeft=button.offsetLeft;
       const buttonTop=button.offsetTop;
       buttonMeasurements.push({
           buttonWidth,
           buttonHeight,
           buttonLeft,
           buttonTop
       });
   });
}

//create particles
const particles=[];
class Particle{
    constructor(x,y,radius,color){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.weight=math.random()*1.5*1.5;
        this.direction=math.random()*2;
    }
    update(){
        this.x+=this.direction;
        this.draw();
    }
    draw(){
        ctx.beginpath();
        ctx.arc(this.x,this.y,this.radius,0,math.pi*2,false);
        ctx.fillstyle='orange';
        ctx.fill();
    }
    
}

let activebtn=0;
buttonElement.forEach(button=>button.addEventListener('mouseenter',function(){
    activebutton=button.dataset.number;
}));

buttonElement.forEach(button=>button.addEventListener('mouseleave',function(){
    activebutton=-1;
}));

function handleParticles(){
    for(let i=0;i<particles.length;i++){
        particles[i].update();
        particles[i].draw();
        if(particles[i].size<=1){
            particles.splice(i,1);
            i--;
        }
    }
}

function createParticle(){
    if(activebutton>-1){
        
            let size=math.random()*40+10;
            let x=math.random()*buttonMeasurements[activebutton].width;
            let y=math.random()*buttonMeasurements[activebutton].y+40;

            
       
        particles.push(particle);
    }
}

console.log("hello")



























