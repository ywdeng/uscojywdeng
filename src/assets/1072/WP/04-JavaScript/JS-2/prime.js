/* prime.js */

function isPrime(num) {
    if (num < 3) return (num == 2);
    if (num % 2 == 0) return false;
    for (var d = 3; d <= Math.sqrt(num); d += 2) {
        if (num % d == 0) return false;
    }
    return true;
}

function listPrime(rangeLeft, rangeRight) {
    var result = [];
    for (var n = rangeLeft; n <= rangeRight; n++) {
        if (isPrime(n)) {
            result.push(n);
        }
    }
    return result;
}

