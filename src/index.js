module.exports = function reverse (n) {
  let numToStr = String(n);
  let lastIndex = numToStr.length - 1;
  let result = '';
  for (let i = lastIndex; i >= 0; i--){
      result += numToStr[i];
  }
  return result;
}
