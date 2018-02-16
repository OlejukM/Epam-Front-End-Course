function isPrime(figure) {
  for (i = 2; i < figure; i++)
    if (figure % i === 0) {
      return false;
    }
  return true;
}
//console.log(isPrime(5)); => true;
