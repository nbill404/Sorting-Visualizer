export function* bubblesort(nums: number[]) : Generator<number[], void, unknown> {
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] < nums[i]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                swapped = true;
                yield [i + 1, i + 2]
            }
        }
    }
}