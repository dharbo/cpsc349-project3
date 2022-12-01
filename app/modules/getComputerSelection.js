// get the computer's selection randomly between the options: 'Rock', 'Paper', or 'Scissors'
export function getComputerSelection () {
  const choice = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choice[randomChoice]
}
