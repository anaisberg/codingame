/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 let game = []

 for (let i = 0; i < 4; i++) {
     var inputs = readline().split(' ');
     let row = []
     for (let j = 0; j < 4; j++) {
         const CNT = parseInt(inputs[j]);
         row.push(CNT)
     }
     game.push(row)
 }
 
 function getScore(game) {
     let max = 2;
     for (let i = 0; i < 4; i++) {
         k = Math.max(...game[i])
         max = Math.max(k, max)
     }
     return max
 }
 
 function unravelGame(game, turns, foursLeft) {
     newGame = game.copy()
     for (let i = 0; i < 4; i++) {
         for (let j = 0; j < 4; j++) {
             if (j > 0) {
                 if (game[i][j] > 2 && game[i][j - 1] == 0) {
                     newGame[i][j] = game[i][j]/2
                     newGame[i][j - 1] = game[i][j]/2
                 }
             }
         }
     }
 }
 
 const score = getScore(game)
 console.error(game)
 
 const FOURS = parseInt(readline());
 
 console.log(score)
 