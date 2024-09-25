/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let target = nums.length - 1;
  for (i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }
  if (target == 0) return true;
  return false;
};
