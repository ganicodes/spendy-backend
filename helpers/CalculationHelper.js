exports.findTotal = function findTotal(arr) {
  return arr.reduce((total, current) => total + Math.round(current));
};
