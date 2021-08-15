
exports.min = function min (array) {

  return array.sort((a, b) => a-b);
}

exports.max = function max (array) {
  return array.sort((a, b) => b-a);
}

exports.avg = function avg (array) {
  let res = 0;
  array.forEach(i => res+=i)
  return res / array.length;
}
