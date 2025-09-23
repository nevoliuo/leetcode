// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
let findNumbers = function(nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            res++
        }
    }
    return res
};

// 0 ms, beats 100%