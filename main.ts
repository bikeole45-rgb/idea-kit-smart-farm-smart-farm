let alarm = 0
let moisture = 0
input.onButtonPressed(Button.A, function () {
    alarm = 0
})
basic.forever(function () {
    basic.showNumber(IdeaKitSmartFarm.queryData(DigitalPin.P8))
    moisture = pins.analogReadPin(AnalogReadWritePin.P2)
    if (moisture >= 900) {
        IdeaKitSmartFarm.MotorRun(IdeaKitSmartFarm.Motors.M2A, 0)
    }
    if (moisture <= 500) {
        IdeaKitSmartFarm.MotorRun(IdeaKitSmartFarm.Motors.M2A, 255)
    }
})
basic.forever(function () {
    if (IdeaKitSmartFarm.sonarDistanceLoop(DigitalPin.P14, DigitalPin.P15, 5)) {
        alarm = 1
    }
    if (alarm == 1) {
        music.ringTone(262)
        basic.pause(250)
        music.stopAllSounds()
        basic.pause(250)
    } else {
        music.stopAllSounds()
    }
})
