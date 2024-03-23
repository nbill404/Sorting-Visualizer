export function* radixsort(nums: number[]) : Generator<number[], void, unknown> {
    let max = Math.max(...nums);
    let digits = ('' + max).length;

    for (let i = 0; i < digits; i++) {
        for (const v of countsort(nums, i)) {
            yield v;
        }
    }
}

function* countsort(nums: number[], digit: number) : Generator<number[], void, unknown> {
    let output = Array(nums.length).fill(0);
    let countArr = Array(10).fill(0);
    let n = nums.length;
    const getIndex = (num: number, digit: number) => { 
        return (Math.floor(num / Math.pow(10, digit))) % 10;
    }

    for (let i = 0; i < n; i++) {
        countArr[getIndex(nums[i], digit)]++;
    }

    for (let i = 1; i < 10; i++) {
        countArr[i] += countArr[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[countArr[getIndex(nums[i], digit)] - 1] = nums[i];
        countArr[getIndex(nums[i], digit)]--;
        yield [i, -1];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = output[i];
        yield [i, -1];
    }
}