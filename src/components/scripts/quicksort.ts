export function* quicksort(nums: number[], l: number, r: number) : Generator<number[], void, unknown> {
    console.log(l, r);

    if (l < r) {
        let pivot = nums[r];
        let i = l;

        for (let j = l; j <= r; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
            yield [i, j];
        }

        [nums[i], nums[r]] = [nums[r], nums[i]];
        yield [i, r];

        for (const v of quicksort(nums, l, i - 1)) {
            yield v;
        }

        for (const v of quicksort(nums, i + 1, r)) {
            yield v;
        }


    }
}