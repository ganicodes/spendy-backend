exports.findTotal = function findTotal(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((total, current) => total + Math.round(current));
};
