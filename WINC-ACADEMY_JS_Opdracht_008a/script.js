const totalAmount = function (number) {
    if (number > 100) {
    return true;
    } else {
        return false;
    }
};

console.log(totalAmount(150));

// This is a fanction that produces something. It does not use console.log

const totalAmount2 = function (number) {
    return number > 100;
};

console.log(totalAmount2(99));