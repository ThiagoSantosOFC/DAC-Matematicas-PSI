function fibonacci(n) {
    let fib = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      let next = fib[i - 1] + fib[i - 2];
      fib.push(next);
    }
  
    return fib;
}

export {
    fibonacci
}