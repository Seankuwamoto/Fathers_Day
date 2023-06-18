
// 56 by 6

const answer = `#...#..#...#..#####..#...#....#####..###....#####..#####
#...#..#...#.....#...#...#......#....#..#...#......#....
.#.#...#...#....#....#...#......#....#..#...#......#....
..#....#...#...#.....#...#......#....###....#####..#####
..#....#...#..#......#...#......#....#..#...#......#....
..#....#####..#####..#####......#....#...#..#####..#####`.split('\n').map(row => row.split(''));

const points = [[5, 4], [1, 10], [53, 2], [19, 4], [31, 2], [40, 4]]
let kibble = [];
for(let i = 0; i < 6; i++) {
    let row = "";
    kibble.push([]);
    for(let j = 0; j < 56; j++) {
        let minDist = 100000;
        for (let point of points) {
            let d = dist(j, i, point[0], point[1]);
            if (d < minDist) {
                minDist = d;
            }
        }
        row += Math.max(6 - minDist, 0);
        kibble[i].push(Math.max(6 - minDist, 0));
    }
    console.log(row);
}
let instructions = "";
let handPos = [0, 0];
let yes = 0;
let no = 0;
// total kibble
console.log(kibble.reduce((a, b) => a + b.reduce((c, d) => c + d, 0), 0));
while (true) {
    let didSomething = false;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 56; j++) {
            if (answer[i][j] === '#') continue;
            if (kibble[i][j] === 0) continue;
            kibble[i][j]--;
            let [dx, dy] = [j - handPos[0], i - handPos[1]];
            if (dx > 0) {
                instructions += "right\n".repeat(dx);
                handPos[0] += dx;   
            }
            if (dx < 0) {
                instructions += "left\n".repeat(-dx);
                handPos[0] += dx;
            }
            if (dy > 0) {
                instructions += "down\n".repeat(dy);
                handPos[1] += dy;
            }
            if (dy < 0) {
                instructions += "up\n".repeat(-dy);
                handPos[1] += dy;
            }
            instructions += "bark\n";

            didSomething = true;
            dropoff:
            for (let k = 0; k < 6; k++) {
                for (let l = 0; l < 56; l++) {
                    if (answer[k][l] !== '#') continue;
                    if (kibble[k][l] === 9) continue;
                    let n = Math.random();
                    if (n < ((9 - kibble[k][l]) / 9) ** 6) {
                        yes++;
                        kibble[k][l]++;
                        let [dx, dy] = [l - handPos[0], k - handPos[1]];
                        if (dx > 0) {
                            instructions += "right\n".repeat(dx);
                            handPos[0] += dx;
                        }
                        if (dx < 0) {
                            instructions += "left\n".repeat(-dx);
                            handPos[0] += dx;
                        }
                        if (dy > 0) {
                            instructions += "down\n".repeat(dy);
                            handPos[1] += dy;
                        }
                        if (dy < 0) {
                            instructions += "up\n".repeat(-dy);
                            handPos[1] += dy;
                        }
                        instructions += "bark\n";
                        break dropoff;
                    }
                    else {
                        no++;
                    }
                }
            }
        }
    }
    if (!didSomething) break;
}
//console.log();
//console.log(kibble.map(row => row.join('')).join('\n'));
console.log(instructions);
// console.log(kibble.map(row => row.join('')).join('\n'));
//console.log(yes, no);

// total kibble
// console.log(kibble.reduce((a, b) => a + b.reduce((c, d) => c + d, 0), 0));

function dist(x1, y1, x2, y2) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}