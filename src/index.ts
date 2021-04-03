import bitwise, { bits } from 'bitwise';
import { toBits } from 'bitwise/string';
import { UInt8 } from 'bitwise/types';
export class gfMult {
  private aesByte: Array<0 | 1> = [0, 0, 0, 1, 1, 0, 1, 1];
  private snowByte: Array<0 | 1> = [1, 0, 1, 0, 1, 0, 0, 1];

  constructor(private firstByte: Uint32Array, private secondByte: Uint32Array,
    private multType: string) {

  }

  mult(): void {
    this.printStartState();
    let res: Uint32Array;
    //this.printEndState(res);
  }

  printStartState() {
    console.log('Inputs:');
    console.log(`\tFirst byte: ${this.firstByte}`);
    console.log(`\tSecond byte: ${this.secondByte}`);
    console.log(`\tAlgorithm: ${this.multType.toUpperCase()}`);
  }

  printEndState(result: Uint32Array) {
    console.log('Output:');
    console.log(`\tFirst byte: ${this.firstByte}`);
    console.log(`\tSecond byte: ${this.secondByte}`);
    if (this.multType.toUpperCase() == 'AES') {
      console.log(`\tAlgorithm byte: ${this.aesByte}`);
    } else {
      console.log(`\tAlgorithm byte: ${this.snowByte}`);
    }
    console.log(`\tMultiplication: ${result}`);
  }
}

function hex2bin(hex: string) {
  return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

const aesByte = hex2bin('1B');
const snowByte = hex2bin('A9');

console.log(`\tAlgorithm byte: ${aesByte}`);
console.log(`\tAlgorithm byte: ${snowByte}`);

let aes: Array<number> = Array.from(hex2bin('1B').split('').map((bit) => {
  return Number(bit)
}));

let snow: Array<number> = Array.from(hex2bin('1B').split('').map((bit) => {
  return Number(bit)
}));


const test = toBits(hex2bin('1B'));

console.log(bits.reduceXor(test))

