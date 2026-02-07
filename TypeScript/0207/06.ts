function add(a: number , b?: number) {
  if (b) {
    return a + b;
  }
  return a;
}