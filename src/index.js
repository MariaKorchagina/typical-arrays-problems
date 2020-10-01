
exports.min = function min (array) {
if (array && array.length) {
   // not empty
return Math.min(...array);
} else {
   // empty
  return 0;
}
}

exports.max = function max (array) {
if (array && array.length) {
   // not empty
 return Math.max(...array);
} else {
    // empty
   return 0;
 }
 }

exports.avg = function avg (array) {
if (array && array.length) {
   // not empty
 return array.reduce((a, b) => (a + b)) / array.length;
} else {
    // empty
   return 0;
 }
 }
