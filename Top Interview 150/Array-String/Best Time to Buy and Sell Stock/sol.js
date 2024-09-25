/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let chepest = prices[0];
  let maxProfit = 0;

  for (i = 1; i < prices.length; i++) {
    if (prices[i] < chepest) {
      chepest = prices[i];
    }
    if (prices[i] > chepest) {
      let temp = prices[i] - chepest;
      if (temp > maxProfit) {
        maxProfit = temp;
      }
    }
  }

  return maxProfit;
};
