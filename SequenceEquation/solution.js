// https://www.hackerrank.com/challenges/permutation-equation/problem
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

// Complete the permutationEquation function below.
function permutationEquation(p) {
    let pMap = {};
    let i = 1;
    for(let num of p){
        pMap[num] = i;
        i++;
    }
    let output = [];
    // p(p(y))
    // console.log(pMap);
    // let index = pMap[1];
    // console.log(index); // Index of 1
    // let indexIndex = pMap[pMap[1]];
    // console.log(indexIndex);
    for(let j=1; j<=p.length; j++){
        output.push(pMap[pMap[j]])
    }
    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = permutationEquation(p);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
