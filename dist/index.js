"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gfMult = void 0;
const bitwise_1 = require("bitwise");
const string_1 = require("bitwise/string");
class gfMult {
    constructor(firstByte, secondByte, multType) {
        this.firstByte = firstByte;
        this.secondByte = secondByte;
        this.multType = multType;
        this.aesByte = [0, 0, 0, 1, 1, 0, 1, 1];
        this.snowByte = [1, 0, 1, 0, 1, 0, 0, 1];
    }
    mult() {
        this.printStartState();
        let res;
        //this.printEndState(res);
    }
    printStartState() {
        console.log('Inputs:');
        console.log(`\tFirst byte: ${this.firstByte}`);
        console.log(`\tSecond byte: ${this.secondByte}`);
        console.log(`\tAlgorithm: ${this.multType.toUpperCase()}`);
    }
    printEndState(result) {
        console.log('Output:');
        console.log(`\tFirst byte: ${this.firstByte}`);
        console.log(`\tSecond byte: ${this.secondByte}`);
        if (this.multType.toUpperCase() == 'AES') {
            console.log(`\tAlgorithm byte: ${this.aesByte}`);
        }
        else {
            console.log(`\tAlgorithm byte: ${this.snowByte}`);
        }
        console.log(`\tMultiplication: ${result}`);
    }
}
exports.gfMult = gfMult;
function hex2bin(hex) {
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}
const aesByte = hex2bin('1B');
const snowByte = hex2bin('A9');
console.log(`\tAlgorithm byte: ${aesByte}`);
console.log(`\tAlgorithm byte: ${snowByte}`);
let aes = Array.from(hex2bin('1B').split('').map((bit) => {
    return Number(bit);
}));
let snow = Array.from(hex2bin('1B').split('').map((bit) => {
    return Number(bit);
}));
const test = string_1.toBits(hex2bin('1B'));
console.log(bitwise_1.bits.reduceXor(test));
//# sourceMappingURL=index.js.map