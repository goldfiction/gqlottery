// return a random value from 0-max, avoid is an array of integers to not repeat with.
// avoid=false to skip this check
function randVal(max, avoid) {
    const val = Math.floor(Math.random() * max) + 1;
    if (avoid) {
        avoid.forEach((avoidVal) => {
            if (val === avoidVal) {
                return randVal(max, avoid);
            }
            return false;
        });
    }
    return val;
}

// return an array of values from 0-max. number of values is many. avoid is a boolean
// to allow or disallow repeated values
function manyPush(many, max, avoid) {
    const value = []; let
        i = 0;
    while (i < many) {
        value.push(randVal(max, avoid ? value : false));
        i += 1;
    }
    return value;
}

// print the results of the 777 and 649 lottery. Use this value to have fun with guessing.
function runMain() {
    console.log('Welcome to GqLottery');
    console.log('--------------------');
    console.log('');

    const seven = {}; const six = {};

    seven.value = manyPush(3, 7, false);
    seven.toString = function sevenToString() { return `${this.value[0]} ${this.value[1]} ${this.value[2]}`; };
    console.log(`This round of 777 wining number is: ${seven.toString()}`);
    console.log('');

    six.value = manyPush(7, 49, true);
    six.toString = function sixToString() { return `${this.value[0]} ${this.value[1]} ${this.value[2]} ${this.value[3]} ${this.value[4]} ${this.value[5]} plus special:(${this.value[6]})`; };
    console.log(`This round of 649 wining number is: ${six.toString()}`);
    console.log('');

    console.log('Did you get it? :)');
    console.log('');
}

module.exports.runMain = runMain;
runMain();
