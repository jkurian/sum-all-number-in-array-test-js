function sumItems(array) {
  // Sum all the numbers in the array
  //[1,[2]]
  let total = 0;
  array.forEach((item) => {
    if(Array.isArray(item)) {
      total += sumItems(item);
    } else {
      total += item;
    }
  })
  return total;
}

module.exports = sumItems;