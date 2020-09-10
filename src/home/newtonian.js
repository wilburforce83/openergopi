// Ergo specific functions

// Newtonian Mechanics for basic data

/*

v = linear velocity (m/s)
r = radius (m)
t = time in seconds between sensor triggers (1 rotation)
omega = angular velocity or change in angular velocity for acceleration i.e. from 10rad/s to 30rad/s would be +20, can be +/- (rad/s)
alpha = angular acceleration (rad/s^2)
J = angular momentum (kg m^2 rad/s)
I = moment of inertia
T = torque (N m)

*/

const I = 0.161 // concept2 default for testing
const pi = Math.PI;

function linearVelocity(r, t) {

    let v;
    v = (pi * (r * 2)) / t;
    return v;
};

function angularVelocity(t) {

    let omega;
    omega = 2 * pi / t;
    //console.log("omega = ", omega, " rad/s")
    angularMomentum(I, omega)
    return omega;
};

function angularMomentum(I, omega) {

    let J;
    J = I * omega;
    console.log("J = ", J, " kg m^2/s")
    return J;
};

function angularAcceleration(omegalast, omegacurrent, timeToChange) {

    let alpha;
    alpha = (omegacurrent - omegalast) / timeToChange;
    return alpha;
};