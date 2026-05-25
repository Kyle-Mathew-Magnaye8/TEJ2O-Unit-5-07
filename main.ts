/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Apr 2026
 * This program will move car.
*/

// variables
let distance = 0

// setup
basic.showIcon(IconNames.Happy)
robotbit.MotorStopAll()

// button a
input.onButtonPressed(Button.A, function () {
    while (true) {
        // read distance sensor
        distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )

        if (distance < 10) {
            // Reverse 10 cm
            robotbit.StpCarMove(-10, 48)
            basic.pause(200)

            // Turn 90 degrees
            robotbit.StpCarTurn(90, 48, 48)
            basic.pause(200)
        } else {
            // Otherwise move forward
            robotbit.StpCarMove(1, 48)
        }
    }
})
