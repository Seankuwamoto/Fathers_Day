const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf8');
let [kibble, instructions] = data.split('\n\n');
kibble = kibble.split('\n').map(x => x.split('').map(y => parseInt(y)));
instructions = instructions.split('\n');

let handPos = [0, 0];
let filled = false;
let count = 0;
for (let instruction of instructions) {
    // if (count > 13) break;
    if (instruction === 'up') handPos[1]--;
    if (instruction === 'down') handPos[1]++;
    if (instruction === 'left') handPos[0]--;
    if (instruction === 'right') handPos[0]++;

    if (instruction === 'bark') {
        if (filled) {
            filled = false;
            kibble[handPos[1]][handPos[0]]++;
        }
        else {
            filled = true;
            kibble[handPos[1]][handPos[0]]--;
        }
    }
    count++;
}

console.log(kibble.map(x => x.map(y => y?"@":".").join('')).join('\n'))