music.ringTone(494)
basic.forever(function () {
    music.playMelody("- - - - - - - - ", 120)
    music.ringTone(pins.digitalReadPin(DigitalPin.P0))
})
