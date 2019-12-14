/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = (nums, target) => nums.filter(num => num < target).length;

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
