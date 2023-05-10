function calcularAnosParaDobrarCapital(c, t) {
    let anos = 0;
    let a = c;
  
    while (a < 2 * c) {
      a += a * t;
      anos++;
    }
  
    return anos;
}

export {
    calcularAnosParaDobrarCapital
}