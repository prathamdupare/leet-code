/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length <= 1) {
    return nums;
  }

  k = k % nums.length;
  if (k === 0) {
    return nums;
  }
  nums.reverse();

  if (nums.length < 3) {
    return nums;
  }

  let left = nums.slice(0, k).reverse();
  let right = nums.slice(k).reverse();
  let three = left.concat(right);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = three[i];
  }

  return nums;
};
