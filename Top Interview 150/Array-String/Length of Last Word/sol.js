/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length !== 0) {
      return arr[i].length;
    }
  }
};
