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


PSEUDOCODE: Maze generator

The depth-first search algorithm of maze generation is frequently implemented using backtracking:

    //#### STEP A ####
    Make the initial cell the current cell and mark it as visited

    //#### STEP B ####
    While there are unvisited cells

        //#### STEP B a ####
        If the current cell has any neighbours which have not been visited

            //#### STEP B a 1 #### Choose randomly one of the unvisited neighbours
            //#### STEP B a 2 #### Push the current cell to the stack
            //#### STEP B a 3 #### Remove the wall between the current cell and the chosen cell
            //#### STEP B a 4 #### Make the chosen cell the current cell and mark it as visited

        //#### STEP B b ####
        Else if stack is not empty

            //#### STEP B b 1 #### Pop a cell from the stack
            //#### STEP B b 2 #### Make it the current cell

*/


function resolveLabirinto(){
// choose start cell
// choose end cell
// celulaAtual = start cell
// escolhe um random vizinho do array vizinhos possiveis
// celulaAtual = vizinho escolhido
// continuar ate encontrar a saida e parar
}


function indiceVizinhos(i,j){
    // vizinho nao pode sair para fora do Canvas,
    // portanto elimina o vizinho que nao existe
    if(i < 0 || j < 0 || i > colunas - 1 || j > linhas - 1){
        return -1;
    }

    // algoritmo que converte o numero grid[i] ,
    //que vai de 0 ate o ultimo elemento do array,
    //em sistema de coordenadas para localizar os vizinhos.
    return i + j * colunas;

}


//creation of the Cells, i is colunas , j is  linhas
function Celula(i,j){
    this.i = i;
    this.j = j;

    //boolean values for each parede: TOPO , DIREITA, BAIXO, ESQUERDA
    this.paredes = [true, true, true, true];

    // set state
    this.visited = false;

    this.buscaVizinhos = function() {
        var vizinhos = [];

        // seleciona os vizinhos (i,j) equivale a celula atual)
        var vizinhoCima = grid[indiceVizinhos(   i   ,    j-1)];
        var vizinhoDireita = grid[indiceVizinhos(i+1    , j)];
        var vizinhoBaixo = grid[indiceVizinhos(  i,       j+1)];
        var vizinhoEsquerda = grid[indiceVizinhos(i -1,   j)];

        //#### STEP B a ####
        //se vizinhoCima existe e foi visitado
        if(vizinhoCima && !vizinhoCima.visited){
            vizinhos.push(vizinhoCima);
        }
        if(vizinhoDireita && !vizinhoDireita.visited){
            vizinhos.push(vizinhoDireita);
        }
        if(vizinhoBaixo && !vizinhoBaixo.visited){
            vizinhos.push(vizinhoBaixo);
        }
        if(vizinhoEsquerda && !vizinhoEsquerda.visited){
            vizinhos.push(vizinhoEsquerda);
        }

        //#### STEP B ####
        // Picking a random vizinho
        if (vizinhos.length > 0){
            var randomVizinho = floor(random(0, vizinhos.length));
            return vizinhos[randomVizinho];
        }else{
            return undefined; // se nao existe vizinhos
        }


    }//busca vizinhos



    this.show = function() {
        var x = this.i * tamanhoCelula;
        var y = this.j * tamanhoCelula;

        stroke(80);

        if(this.paredes[0]){
            //desenha parede do topo de cada celula
            line(x,y, x + tamanhoCelula, y);
        }

        if(this.paredes[1]){
            //parede da direita de cada celula
            line(x + tamanhoCelula, y, x + tamanhoCelula, y + tamanhoCelula);
        }

        if(this.paredes[2]){
            //parede de baixo de cada celula
            line(x + tamanhoCelula, y + tamanhoCelula, x, y + tamanhoCelula);
        }

        if(this.paredes[3]){
            //parede da esquerda de cada celula
            line(x, y + tamanhoCelula, x, y);
        }

        // paints a visited celula

        /*
        if (this.visited){
        noStroke();
            // R G B Alpha
        fill(20,255,0,60);
        rect(x, y, tamanhoCelula, tamanhoCelula);
        }

        */

    }// end of show method

    this.highlight = function(){
        var x = this.i * tamanhoCelula;
        var y = this.j * tamanhoCelula;

        noStroke();
            // R G B Alpha
        fill(0,0,0,140);
        rect(x, y, tamanhoCelula, tamanhoCelula);
    }


} // end of Celula



function removeWalls(a , b){
    var x = a.i - b.i;
    // apaga paredes de ambos vizinhos na direcao horizontal (x)
    if (x === 1){
        a.paredes[3] = false;  // ESQUERDA
        b.paredes[1] = false;  // DIREITA
    }else if (x === -1) {
        a.paredes[1] = false; // DIREITA
        b.paredes[3] = false; // ESQUERDA
    }
    // apaga paredes de ambos vizinhos na direcao vertical (y)
    var y = a.j - b.j;
    if (y === 1){
        a.paredes[0] = false; // CIMA
        b.paredes[2] = false; // BAIXO
    }else if (y === -1) {
        a.paredes[2] = false; // BAIXO
        b.paredes[0] = false; // CIMA
    }
}
