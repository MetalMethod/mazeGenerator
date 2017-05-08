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
