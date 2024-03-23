export function* insertionsort(nums: number[]) : Generator<number[], void, unknown> {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let j = i - 1;
        
        for (; j >= 0; j--) {
            if (nums[j] > num) {
                [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
            } else { 
                break;
            }
            yield [j - 1, j];
        }

        yield [j - 1, j];
    }
}