export function* selectionsort(nums : number[]) {
    for (let i = 0; i < nums.length; i++) {
        let idx = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[idx]) {
                idx = j; 
            }

            yield [i, j];
        }

        [nums[i], nums[idx]] = [nums[idx], nums[i]]; 
        yield [i, idx];
    }

}