getFilteredArray = (array, fn) => {
  let res = [];
  forEach(array, el => {
    if (getFilteredfunc(el)) {
      res.push(el);
    }
  });
  return res;
};
