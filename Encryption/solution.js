// https://www.hackerrank.com/challenges/encryption/problem
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

// Complete the encryption function below.
function encryption(s) {
    let length = s.length;
    let rows = Math.floor(Math.sqrt(length));
    let cols = Math.ceil(Math.sqrt(length));
    let words = new Array(cols).fill('');
    for(let i=0; i<s.length; i++){
        words[i%cols] = words[i%cols]+s[i];
    }
    // console.log(rows, cols);
    // console.log(words.join(' '));
    return words.join(' ')
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}