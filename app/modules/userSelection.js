export function getUserSelection(option) {
    if (option.dataset.selection === "Rock") {
        return "Rock"
    } else if (option.dataset.selection === "Paper") {
        return "Paper"
    }
    return "Scissors"
}