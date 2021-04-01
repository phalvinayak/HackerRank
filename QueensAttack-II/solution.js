// https://www.hackerrank.com/challenges/queens-attack-2/problem
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

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    // N x N Board, Queen can move in 8 direction for her position
    let oMap = {};
    for(let o of obstacles){
        oMap[`${o[0]}-${o[1]}`] = true
    }
    // console.log(oMap);
    let count = 0;
    count += getStraigtDirectionColumnsCount('north', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('south', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('east', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('west', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('north-east', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('north-west', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('south-east', n, oMap, r_q, c_q);
    count += getStraigtDirectionColumnsCount('south-west', n, oMap, r_q, c_q);
    return count;
}

function getStraigtDirectionColumnsCount(dir, n, oMap, r_q, c_q){
    let nextPos = getNextPosition(dir, r_q, c_q);
    let counter = 0;
    while(nextPos[0]<= n && nextPos[1]<=n && nextPos[0]>0 && nextPos[1]>0){
        // console.log("Next Post : ", dir,  nextPos);
        if(oMap[`${nextPos[0]}-${nextPos[1]}`]){
            // console.log("Post ", nextPos, "Blocked");
            break;
        }
        counter++;
        nextPos = getNextPosition(dir, nextPos[0], nextPos[1]);
    }
    return counter;
}

function getNextPosition(dir, r, c){
    let nextPos = [r,c];
    switch(dir){
        case 'north':
            nextPos[0]++;
            break;
        case 'south':
            nextPos[0]--;
            break;
        case 'east':
            nextPos[1]++;
            break;
        case 'west':
            nextPos[1]--;
            break;
        case 'north-east':
            nextPos[0]++;
            nextPos[1]++;
            break;
        case 'south-east':
            nextPos[0]--;
            nextPos[1]++;
            break;
        case 'south-west':
            nextPos[0]--;
            nextPos[1]--;
            break;
        case 'north-west':
            nextPos[0]++;
            nextPos[1]--;
            break;
    }
    return nextPos;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}