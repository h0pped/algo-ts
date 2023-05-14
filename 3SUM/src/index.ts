const binarySearch = (nums: number[], target: number) => {
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
}

const threesum = (nums: number[]): number[][] => {
    const results: number[][] = [];

    if (nums.length < 3) return results

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const threesum = nums[i] + nums[left] + nums[right]

            if (threesum > 0) {
                right -= 1
            }
            else if (threesum < 0) {
                left += 1
            }
            else if (threesum === 0) {
                results.push([nums[i], nums[left], nums[right]])
                left += 1
                while (nums[left] === nums[left - 1] && left < right) left += 1
            }
        }
    }
    return results

}

const arr = [30, -40, -20, -10, 40, 0, 10, 5];

console.log(threesum(arr));