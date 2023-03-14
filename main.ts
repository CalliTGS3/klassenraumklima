input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Anzeige += 1
    if (Anzeige == 4) {
        Anzeige = 0
    }
})
let Geruch = 0
let CO2 = 0
let Luftfeuchte = 0
let Temperatur = 0
let Anzeige = 0
Qwiic_Openlog.openFile("DATEN.TXT")
basic.showString("W")
for (let Index = 0; Index <= 5; Index++) {
    basic.showNumber(Index)
    basic.pause(1000)
}
basic.showString("S")
basic.forever(function () {
    Temperatur = DHT20.dht20Sensor(DHT20.DHT20_state.DHT20_temperature_C)
    Qwiic_Openlog.writeNumber(Temperatur)
    Qwiic_Openlog.writeLine("")
    Luftfeuchte = DHT20.dht20Sensor(DHT20.DHT20_state.DHT20_humidity)
    Qwiic_Openlog.writeNumber(Luftfeuchte)
    Qwiic_Openlog.writeLine("")
    CO2 = SCD30.readCO2()
    Qwiic_Openlog.writeNumber(CO2)
    Qwiic_Openlog.writeLine("")
    Geruch = pins.analogReadPin(AnalogPin.C16)
    Qwiic_Openlog.writeNumber(Geruch)
    Qwiic_Openlog.writeLine("")
    basic.pause(1000)
})
basic.forever(function () {
    if (Anzeige == 0) {
        basic.showNumber(Temperatur)
    } else if (Anzeige == 1) {
        basic.showNumber(Luftfeuchte)
    } else if (Anzeige == 2) {
        basic.showNumber(CO2)
    } else {
        basic.showNumber(Geruch)
    }
})
