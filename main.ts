input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    car4sender.programm6(
    car4sender.programmSchritt(50, 90, 20),
    null,
    null,
    null,
    null
    )
    car4sender.sendProgramm19()
    basic.showString("A")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    car4sender.programm6(
    car4sender.programmSchritt(80, 150, 250),
    car4sender.programmSchritt(80, 30, 250),
    car4sender.programmSchritt(-80, 30, 250),
    car4sender.programmSchritt(100, 150, 250),
    car4sender.programmSchritt(100, 150, 30)
    )
    car4sender.sendProgramm19()
    basic.showString("B")
})
function Konfiguration () {
    car4sender.comment("calliope-net/car4-prog-61")
    car4sender.comment("1 Erweiterung laden:")
    car4sender.comment("calliope-net/car4-sender")
}
car4sender.beimStart(240)
