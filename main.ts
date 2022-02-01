basic.forever(function () {
    if (input.lightLevel() < 25) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
