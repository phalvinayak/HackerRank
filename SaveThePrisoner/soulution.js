// https://www.hackerrank.com/challenges/save-the-prisoner/problem
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

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
	// Adding s-1 to candies to neutralize the starting point
	// e.g If you say start with one 1-1=0, this will start normally from 1st person
	// and will work for any number n
    let candies = m + s-1;
    let rem = candies % n;
    // In real life there is no 0th person, in case of 0 its the last person
    return rem == 0 ? n : rem;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().split(' ');

        const n = parseInt(nms[0], 10);

        const m = parseInt(nms[1], 10);

        const s = parseInt(nms[2], 10);

        let result = saveThePrisoner(n, m, s);

        ws.write(result + "\n");
    }

    ws.end();
}
