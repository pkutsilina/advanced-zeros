let actualTimes = 0;

module.exports = function getZerosCount(number, base) {
    let primes = getPrimeDivisors(base);
    let actualPrimesToCount = [];
    Object.keys(primes).forEach((prime) => {
        recur(number, prime);
        let copyActualTimes = actualTimes;
        actualTimes = 0;
        actualPrimesToCount.push(Math.floor(copyActualTimes/primes[prime]));
    });
    return Math.min.apply( Math, actualPrimesToCount);
};

function getPrimeDivisors(number) {
    let result = new Map();

    let saverNumber = number;
    for (let i = 2; i < saverNumber; i++) {
        if (number % i == 0) {
            if (result[i] == undefined) {
                result[i] = 1;
            } else {
                result[i] = ++result[i];
            }
            number = number/i;
            --i;
        }
    }
    if (isEmpty(result)){
        //number prime itself
        result[number] = 1;
    }
    return result;
}

function recur(number, basePrime) {
    if (number < basePrime) {
        return 'end';
    }
    else {
        actualTimes += Math.floor(number / basePrime);
        recur(Math.floor(number / basePrime), basePrime);
    }
}

function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}