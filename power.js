// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, exp - 1)
}

// write a function called power which accepts a base and an exponent.
// the function should return the power of the base to the exponent.
// this function should mimic the functionality of Math.pow()
// don't worry about negative bases and exponents

// any number raised to the power of 0 equals 1