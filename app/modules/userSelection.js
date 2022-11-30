export function getUserSelection(option) {
    if (option.dataset.selection === "rock") {
        return "rock"
    } else if (option.dataset.selection === "paper") {
        return "paper"
    }
    return "scissors"
}