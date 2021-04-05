// https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem
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

// Complete the organizingContainers function below.
function organizingContainers(container) {
    let cUnits = new Array(container.length).fill(0);
    let tUnits = new Array(container.length).fill(0);
    for(let i=0; i<container.length; i++){
        for(let j=0; j<container.length; j++){
            cUnits[i] += container[i][j];
            tUnits[j] += container[i][j];
        }
    }
    cUnits.sort((a,b) => a-b);
    tUnits.sort((a,b) => a-b);

    // No of items in each container === total no of items each type then possible.
    if(JSON.stringify(cUnits)==JSON.stringify(tUnits)){
        return "Possible";
    } else {
        return "Impossible";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        let result = organizingContainers(container);

        ws.write(result + "\n");
    }

    ws.end();
}
