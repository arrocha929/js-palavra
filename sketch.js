let palavra;

function setup() {
  createCanvas(600, 600);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["ALEX NO ALURA"];
  
  return random(palavras);
}

function inicializaCores() {
  background("BLACK");
  fill("YELLOW");
  textSize(60);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let parcial = palavraParcial(0, width);
    
  text(parcial, 300, 300);
  
}