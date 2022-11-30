export function getComputerSelection(){
    const choice = ["Rock", "Paper", "Scissors"]
    const randomChoice = Math.floor(Math.random() * 3)
    choice[randomChoice]
    return choice[randomChoice]
}