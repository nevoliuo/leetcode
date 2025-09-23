// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
let containsDuplicate = function(nums) {
    let set = new Set(nums)
    return nums.length !== set.size
};

//19 ms, beats 55.63%


