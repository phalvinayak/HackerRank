// https://www.hackerrank.com/challenges/taum-and-bday/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let bCost = bc;
    let wCost = wc;
    if(bc > wc){
        if(wc + z < bc){
            bCost = wc + z;
        }
    } else {
        if(bc + z < wc){
            wCost = bc + z;
        }
    }
    return bCost * b + wCost * w;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const b = BigInt(parseInt(firstMultipleInput[0], 10));

        const w = BigInt(parseInt(firstMultipleInput[1], 10));

        const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const bc = BigInt(parseInt(secondMultipleInput[0], 10));

        const wc = BigInt(parseInt(secondMultipleInput[1], 10));

        const z = BigInt(parseInt(secondMultipleInput[2], 10));

        const result = taumBday(b, w, bc, wc, z);

        ws.write(result + '\n');
    }

    ws.end();
}