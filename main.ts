let distancia = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let velocidad = 40
let velocidad2 = 35
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(100)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(100)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad2)
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
