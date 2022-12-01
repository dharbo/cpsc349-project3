// update the scoreBoard on the page based on data from window.localStorage
export function updateScores (userScore, computerScore) {
  userScore.textContent = window.localStorage.getItem('userWinCount')
  computerScore.textContent = window.localStorage.getItem('computerWinCount')
}
