const addition = (a, b) => {
    if (a == 'string' || b == 'string' ) {
        return NaN
    } else {
        return a + b;
    }
}

// function addition() {
//     return 42;
// }

module.exports = addition;