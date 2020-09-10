// Ergo Functions for power phase, recovery phase etc


//test function using keypress instead of GPIO state
var lastRevolution = 0;
var lastOmega = 0;
var omega = 0;
window.onkeypress = function (event) {
    if (event.keyCode == 32) { // spacebar

        var d = new Date();
        var time = d.getTime();
        let t = (time - lastRevolution) / 1000

        lastRevolution = time;
        console.log("time between revolutions = ", t, " seconds");
        console.log("last omega = ", lastOmega, "rad/s");
        omega = angularVelocity(t);
        console.log("current omega = ", omega, "rad/s");
        let b = angularAcceleration(lastOmega, omega, t);
        lastOmega = omega;
        console.log("b =", b, " rad/s^2")

    }
};