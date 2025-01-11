function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Error: Arguments must be numbers