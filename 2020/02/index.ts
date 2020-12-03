import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const findSolutionOne = (input: string[]): number => {
    let valids = 0;
    input.forEach(line => {
        let sides = line.split(':');
        let password = sides[1].trim();
        let letter = sides[0].split(' ')[1];
        let minimum = Number(sides[0].split(' ')[0].split('-')[0]);
        let maximum = Number(sides[0].split(' ')[0].split('-')[1]);
        let count = password.split(letter).length - 1;
        if((count >= minimum) && (count <= maximum)) valids++;
    });
    return valids;
}

const findSolutionTwo = (input: string[]): number => {
    let valids = 0;
    input.forEach(line => {
        let sides = line.split(':');
        let password = sides[1].trim();
        let letter = sides[0].split(' ')[1];
        let firstPos = Number(sides[0].split(' ')[0].split('-')[0]);
        let secondPos = Number(sides[0].split(' ')[0].split('-')[1]);
        if((password.charAt(firstPos - 1) == letter && password.charAt(secondPos - 1) != letter) || (password.charAt(firstPos - 1) != letter && password.charAt(secondPos - 1) == letter)) valids++;
    });
    return valids;
}

const lines = INPUT_FILE.split('\n');

console.log(`Solution 1: ${findSolutionOne(lines)}`);
console.log(`Solution 2: ${findSolutionTwo(lines)}`);