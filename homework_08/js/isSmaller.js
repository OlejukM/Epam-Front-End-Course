function isSmaller(greater, lesser) {
  return !isBigger(greater, lesser);
}

function isBigger(greater, lesser) {
  return (greater > lesser);
}

//console.log(isSmaller(5, -1)); => false;
