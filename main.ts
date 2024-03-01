input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    car4sender.programm6(
    car4sender.programmSchritt(50, 150, cm),
    null,
    null,
    car4sender.programmSchrittT(-40, 8, cm),
    null
    )
    car4sender.sendBuffer0_setBit(car4sender.eBufferBit.x80_MotorPower, true)
    car4sender.sendBuffer0_setBit(car4sender.eBufferBit.fahrenStrecke, true)
    car4sender.sendBuffer19()
    basic.showString("A")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    car4sender.programm6(
    car4sender.programmSchritt(80, 150, cm),
    car4sender.programmSchritt(80, 30, cm),
    car4sender.programmSchritt(-80, 30, cm),
    car4sender.programmSchritt(100, 150, cm),
    car4sender.programmSchritt(100, 150, 29)
    )
    car4sender.sendBuffer0_setBit(car4sender.eBufferBit.x80_MotorPower, true)
    car4sender.sendBuffer0_setBit(car4sender.eBufferBit.fahrenStrecke, true)
    car4sender.sendBuffer19()
    basic.showString("B")
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    cm += -1
    basic.showNumber(cm)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    cm += 1
    basic.showNumber(cm)
})
function Konfiguration () {
    car4sender.comment("calliope-net/car4-prog-61")
    car4sender.comment("1 Erweiterung laden:")
    car4sender.comment("calliope-net/car4-sender")
}
let cm = 0
car4sender.beimStart(240)
cm = 250
