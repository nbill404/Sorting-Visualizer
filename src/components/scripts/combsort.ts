export function* combsort(nums: number[]) : Generator<number[], void, unknown> {
    let gap = nums.length;
    let swapped = true;
    const getGap = (gap: number) => {
        gap = (gap * 10) / 13;
        return gap < 1 ? 1 : Math.floor(gap);
    }


    while (swapped || gap != 1) {
        gap = getGap(gap);
        swapped = false;

        for (let i = 0; i < nums.length - gap; i++) {
            
            if (nums[i] > nums[i + gap]) {
                [nums[i], nums[i + gap]] = [nums[i + gap], nums[i]];
                swapped = true;
                yield [i, i + gap];
            }
        }
    }
}