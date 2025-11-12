let Score = 0
input.onButtonPressed(Button.A, function () {
    Score = randint(0, 2)
    if (Score == 0) {
        basic.showIcon(IconNames.Skull)
    } else if (Score == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
