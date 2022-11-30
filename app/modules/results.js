export function getResults(playerSelection, computerSelection){
   let score;

   if(playerSelection == computerSelection){
    score = 0
   }else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
    score = 1
   }else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
    score = 1
   }else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
    score = 1
   }else{//if computer wins
    score = -1
   }
   return score

}