let canvas;
let imagen;
let nombreImagen = 0; 

let button1;
let button2;

let imagSlider2;
let slider2;

let imagSlider3;
let slider3;

let imagSlider4;
let slider4;

// las imágenes precargadas NO deben estar en una carpeta independiente 
// la primera imagen debe comenzar con el nombre "0", luego las que siguen en orden 1, 2, 3, 4...
function preload(){
  imagen = loadImage(nombreImagen + ".jpg");
  imagSlider2 = loadImage("imagSlider2.jpg");
  imagSlider3 = loadImage("imagSlider3.jpg"); 
  imagSlider4 = loadImage("imagSlider4.jpg");// imagen que cambiara de tamaño con el slider
} 

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

  button1 = createButton('✜»✜«✜');
  button1.position(440, 580);
  button1.mousePressed(cambiarImagen1);
  let col=color(184, 11, 61);
  button1.style('background-color',col);

  button2 = createButton('✜»✜«✜');
  button2.position(200, 580);
  button2.mousePressed(cambiarImagen2);
  let col2=color(160, 116, 10);
  button2.style('background-color',col2);

  slider2 = createSlider(0, 300, 0);
  slider2.position(1000, 150);
  slider2.size(100);

  slider3 = createSlider(0, 300, 0);
  slider3.position(800, 600);
  slider3.size(100);

  slider4 = createSlider(0, 300, 0);
  slider4.position(1200, 600);
  slider4.size(100);
  

}

// cada vez que presiono el botón "avanza" se suma un "1" y la secuencia de imágenes avanza 
// si el número total de imágenes es igual al indicado en la condición IF, el conteo se resetea a "0" 
function cambiarImagen1() {
  nombreImagen += 1; 
  if (nombreImagen == 4) { // número total de imágenes a usar
    nombreImagen = 0;
  }
  imagen = loadImage(nombreImagen + ".jpg"); // carga una nueva imagen cuando se presiona el botón "avanza" 
}

// cada vez que presiono el botón "retrocede" se resta un "1" y la secuencia de imágenes retrocede 
// si el número total restado es igual a "-1", el conteo se resetea al máximo valor indicado como nombre (en el ejemplo es "4" porque existe un 4.jpeg )   
function cambiarImagen2() {
  nombreImagen -= 1;
  if (nombreImagen == -1) {
    nombreImagen = 3; // máximo valor indicado como nombre 
  }
  imagen = loadImage(nombreImagen + ".jpg"); // carga una nueva imagen cuando se presiona el botón "retrocede"
}

function draw() {
  background(0);
  tint(200, 300);
  image(imagen, 200, 140, 300 , 400);
  push();
  tint(slider2.value(), 300);
  image(imagSlider2,850, 225, 400, 300);  
  pop();
  push();
  tint(slider3.value(), 100);
  image(imagSlider3, 850, 225, 400, 300);  
  pop();
  push();
  tint(slider4.value(), 100);
  image(imagSlider4,850, 225, 400, 300);  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
