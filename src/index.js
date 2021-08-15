
exports.min = function min (array) {
  if(typeof(array) !== "object") {
    return 0
  }
  if(array.length <= 1) {
    return 0
  }
  return array.sort((a, b) => a-b)[0];
}

exports.max = function max (array) {
  if(typeof(array) !== "object") {
    return 0
  }
  if(array.length <= 1) {
    return 0
  }
  return array.sort((a, b) => b-a)[0];
}

exports.avg = function avg (array) {
  let res = 0;
  if(typeof(array) !== "object") {
    return 0
  }
  if(array.length <= 1) {
    return 0
  }
  array.forEach(i => res+=i)
  return res / array.length;
}
