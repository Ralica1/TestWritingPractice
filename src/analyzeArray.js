function analyzeArray(array) {
  if (!array.length) return { average: 0, min: null, max: null, length: 0 };
  let sum = 0;
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return {
    average: sum / array.length,
    min,
    max,
    length: array.length,
  };
}

module.exports = analyzeArray;
