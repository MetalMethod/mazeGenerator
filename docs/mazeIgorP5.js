/*
Done with the framework p5.js
p5js.org
by Igor Busquets following the GREAT tutorial by Daniel Shiffman:
Part1:
https://www.youtube.com/watch?v=HyK_Q5rrcr4
Part2
https://www.youtube.com/watch?v=D8UgRyRnvXU
Part3:
https://www.youtube.com/watch?v=8Ju_uxJ9v44
Part4:
https://www.youtube.com/watch?v=_p5IH0L63wo

Reference links:
https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker


THIS FILE CONTAINS ALL THE GLOBAL VARIABLES AND THE
REQUIRED FUNCTIONS BY THE P5.JS FRAMEWORK

*/

//GLOBALS
var tamanho = 20
var tamanhoCanvas = 800;

var tamanhoCelula = tamanhoCanvas / tamanho;

var colunas;
var linhas;

var grid = [];

var stackCelula = [];

var celulaAtual;
var celulaProxima;

var larintoPronto = false;

// on p5.js, setup() runs only once
function setup() {
    frameRate(60); // slows everything to given fps.
    createCanvas(tamanhoCanvas+2, tamanhoCanvas+2);

    colunas = floor(width/tamanhoCelula);
    linhas = floor(height/tamanhoCelula);

// loop das linhas, para cada linha cria uma coluna,
//i is colunas , j is  linhas
    for (var  j= 0; j < colunas; j++){

        // loop das linhas, para cada linha cria uma coluna,
        //i is colunas , j is  linhas
        for (var  i = 0; i < linhas; i++){
            var celula = new Celula(i,j);
            grid.push(celula);
        }
    }
    //#### STEP A ####
    celulaAtual = grid[0];

}// setup function



// on p5.js, draw() is a loop and always runs
function draw() {
  background(240);

  // desenhar as celulas
    for (var  i = 0; i < grid.length; i++){
        //console.log(i);
     grid[i].show();
  }

  //#### STEP A ####
  // paints visited cell
  celulaAtual.visited = true;

  // marca vizualmente celula atual
  celulaAtual.highlight();

  //#### STEP B a 1 ####
  celulaProxima = celulaAtual.buscaVizinhos();
  //enquanto houver proxima celula
  if (celulaProxima){
      celulaProxima.visited = true;

       //#### STEP B a 2 ####
       stackCelula.push(celulaAtual);

       //#### STEP B a 3 ####
      removeWalls(celulaAtual, celulaProxima);

      celulaAtual = celulaProxima;
  }// end if
  //#### STEP B a 4 ####
  else if (stackCelula.length > 0) {
      celulaAtual = stackCelula.pop();
  }



}// draw function
