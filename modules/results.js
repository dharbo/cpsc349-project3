// update dialog and get the results, 1 point for who won and 0 points for who lost
export function getResults (playerSelection, computerSelection, dialog) {
  if (playerSelection === computerSelection) { // draw, same selections
    const result = 'User chooses ' + playerSelection + ' and Computer chooses ' + computerSelection + '. It\'s a Draw!'
    dialog.textContent = result
    return [0, 0]
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') { // user wins
    const result = 'Rock crushes Scissors. User wins!'
    dialog.textContent = result
    return [1, 0]
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') { // user wins
    const result = 'Scissors cut Paper. User wins!'
    dialog.textContent = result
    return [1, 0]
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') { // user wins
    const result = 'Paper covers Rock. User wins!'
    dialog.textContent = result
    return [1, 0]
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') { // computer wins
    const result = 'Scissors gets crushed Rock... Computer wins ..'
    dialog.textContent = result
    return [0, 1]
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') { // computer wins
    const result = 'Paper gets cut by Scissors... Computer wins ..'
    dialog.textContent = result
    return [0, 1]
  }

  const result = 'Rock gets covered by Paper... Computer wins ..' // computer wins
  dialog.textContent = result
  return [0, 1]
}
