console.log(" Generate a 6 digit OTP using Math.random()");

function otp() {
    return Math.floor(100000 + Math.random() * 900000);
}

console.log("OTP :", otp());