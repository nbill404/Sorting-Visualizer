export function* countingsort(nums: number[]) : Generator<number[], void, unknown> {
    let max = Math.max(...nums);
    let countArr = Array(max + 1).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        countArr[nums[i]]++;
        yield [i, -1];
    }

    // Prefix Sum
    for (let i = 1; i <= max; i++) {
        countArr[i] += countArr[i - 1];
    }
 
    var copy = Object.assign([], nums);

    for (let i = copy.length - 1; i >= 0; i--) {
        nums[countArr[copy[i]] - 1] = copy[i];
        countArr[copy[i]]--;

        yield [i, -1];
    }
}