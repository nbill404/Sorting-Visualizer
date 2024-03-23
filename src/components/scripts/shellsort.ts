export function* shellsort(nums: number[]) : Generator<number[], void, unknown> {
    let n = nums.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let val = nums[i];
            let j = i;

            while (j >= gap && nums[j - gap] > val) {
                nums[j] = nums[j - gap];
                j -= gap;

                yield [j, j - gap];
            }
            nums[j] = val;

            yield [j, -1];
        }
    }
}