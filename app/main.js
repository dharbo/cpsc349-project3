// import { selection } from "./modules/selection.js"
import { getUserSelection } from "./modules/userSelection.js"

const main = document.querySelector('main')

const options = document.getElementsByClassName('rps')

for (const option of options) {
    option.addEventListener("click", event => {
        // TODO: figure out which selection is being called.

        const userSelection = getUserSelection(option)

        console.log(option)
        console.log(userSelection)

        // TODO: generate computer generated selection.
        //getComputerSelection()

        // TODO: check the results; who wins?
        //getResults()

        // TODO: keep track of the score.
        //getScoreValues()  <- maybe return a list of size 2, index one is the user's score, and index two is the computer's score
    })
}


// TODO: when user presses reser button, clear the local storage

// this should work later on
const resetBtn = document.getElementsByClassName("resetBtn")
resetBtn[0].addEventListener("click", event => {
    window.localStorage.clear()
})