var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let c = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[c] !== nums[i]) {
      c++;
      nums[c] = nums[i];
    }
  }
  return c + 1;
};
