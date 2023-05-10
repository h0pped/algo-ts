"use strict";
const binarySearch = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] >= target) {
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return -1;
};
const threesum = (nums) => {
    const sorted = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            const res = binarySearch(sorted, -(sorted[i] + sorted[j]));
            if (res !== -1) {
                result.push([sorted[i], sorted[j], sorted[res]]);
            }
        }
    }
    return result;
};
const arr = [30, -40, -20, -10, 40, 0, 10, 5];
console.log(threesum(arr));
