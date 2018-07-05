let total = 0;
function sumItems(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          result += sumItems(array[i])
      } else {
          result += array[i];
      }
  }
  return result;
}
//console.log(sumItems([1,2,3]) )
console.log(sumItems([1,2,3,[1]]) )
module.exports = sumItems;