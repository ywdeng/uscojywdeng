function factorize(n) {
    var factors = new Map();
    var max = Math.ceil(Math.sqrt(n));
    for (var d = 2; (d < max) && (n > d); d++) {
        while (n % d === 0) {
            if (factors.has(d)) {
                factors.set(d, factors.get(d) + 1);
            } else {
                factors.set(d, 1);
            }
            n = n / d;
        }
    }
    return factors;
}

function map2array(map) {
    var obj = {};
    for (let [k, v] of map) {
        obj[k] = v;
    }
    return obj;
}

var x = 100;
var y = factorize(x);
console.log(y);
var json = JSON.stringify(map2array(y), null, 2);
console.log(json);

