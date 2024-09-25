package main

func removeDuplicates(nums []int) int {
	c := 0
	for i := 0; i < len(nums); i++ {
		if nums[c] != nums[i] {
			c++
			nums[c] = nums[i]
		}
	}
	return c + 1
}
