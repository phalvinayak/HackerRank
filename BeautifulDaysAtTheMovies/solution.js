// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let beautifulDayCounter = 0;
    while(i<=j){
        if(getReverseFiff(i) % k == 0){
            beautifulDayCounter++;
        }
        i++;
    }
    return beautifulDayCounter;
}

function getReverseFiff(num){
    let str = `${num}`.split('').reverse().join('');
    // console.log(Math.abs(num - parseInt(str, 10)));
    return Math.abs(num - parseInt(str, 10));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}