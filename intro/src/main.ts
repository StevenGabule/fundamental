function main() {
  console.log('Hello World');
}

const add = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = output => console.log(output);

const names: Array<string> = []

const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 2000);
})

main();