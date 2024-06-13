# js-círculos-coloridos
let cor
let posicaohorizontal
let posicaovertical

function setup() {
  createCanvas(400, 400);
  background("rgb(5,5,5)");
  cor=color(random(0,255),random(0,255),random(0,255))
  posicaohorizontal= [0,0,0] 
  posicaovertical=[random(height), random(height), random(height)];
}

function draw(){
for (let contador in posicaohorizontal){
  fill(cor)
  circle (posicaohorizontal[contador],posicaovertical[contador],50);
  posicaohorizontal [contador]+=random(1,3)
  posicaovertical[contador]+= random(-3,3);
if(posicaohorizontal[contador]>=width){
  posicaohorizontal[contador]=0;
  posicaovertical[contador]=random(height)
}
}
  if(mouseIsPressed) cor= color(random(0,255), random(0,255), random(0,255), random(0,255), random(0,100));
}
