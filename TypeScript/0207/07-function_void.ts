function add(a: number, b: number): number|void {
  if (a >= 0 || b >= 0) {
    return a + b;
  }
}

console.log("return1: ", add(-1, 3));
console.log("return2: ", add(1, 3));
console.log("return3: ", add(-1, -3));

function error(message: string): never {
  throw new Error(message);
}