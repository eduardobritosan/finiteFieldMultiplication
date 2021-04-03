export class gfMult {
  private aesByte: string = '00011011';
  private snowByte: string = '10101001';

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
