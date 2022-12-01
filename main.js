import { getUserSelection } from './modules/userSelection.js'
import { getComputerSelection } from './modules/getComputerSelection.js'
import { getResults } from './modules/results.js'
import { updateScores } from './modules/updateScores.js'

// get the 3 rock, paper, scissors buttons
const options = document.getElementsByClassName('rps')

// get the user's score element, that will increment
const userScore = document.querySelector('[data-player="user"]')
// update based on data from window.localStorage
if (!window.localStorage.getItem('userWinCount')) {
  window.localStorage.setItem('userWinCount', 0)
}
userScore.textContent = window.localStorage.getItem('userWinCount')

// get the computer's score element, that will increment
const computerScore = document.querySelector('[data-player="computer"]')
// update based on data from window.localStorage
if (!window.localStorage.getItem('computerWinCount')) {
  window.localStorage.setItem('computerWinCount', 0)
}
computerScore.textContent = window.localStorage.getItem('computerWinCount')

// have a scoreBoard to keep track of points, convert scores from window.localStorage to type Int
let scoreBoard = [parseInt(window.localStorage.getItem('userWinCount')), parseInt(window.localStorage.getItem('computerWinCount'))]

// get the dialog that will change depending on the result of each round
const dialog = document.querySelector('[data-announcement="dialog"]')
// update based on data from window.localStorage
if (!window.localStorage.getItem('message')) {
  window.localStorage.setItem('message', 'Who will win this round?')
}
dialog.textContent = window.localStorage.getItem('message')

// loop through each choice the user has, and have an event listener on each one
for (const option of options) {
  option.addEventListener('click', event => {
    // get the user's selection
    const userSelection = getUserSelection(option)

    // compute the computer's selection
    const computerSelection = getComputerSelection()

    // update dialog and get the results, 1 point for who won and 0 points for who lost
    const result = getResults(userSelection, computerSelection, dialog)
    window.localStorage.setItem('message', dialog.textContent)

    // update the user's and computer's score, both in the scoreBoard and in window.localStorage
    scoreBoard[0] += result[0]
    scoreBoard[1] += result[1]
    window.localStorage.setItem('userWinCount', scoreBoard[0])
    window.localStorage.setItem('computerWinCount', scoreBoard[1])

    // update the scoreBoard on the page based on data from window.localStorage
    updateScores(userScore, computerScore)
  })
}

// clear local storage and set default values, when reset button is clicked
const resetBtn = document.getElementsByClassName('resetBtn')
resetBtn[0].addEventListener('click', event => {
  window.localStorage.clear()
  scoreBoard = [0, 0]
  userScore.textContent = 0
  computerScore.textContent = 0
  dialog.textContent = 'Who will win this round?'
})
