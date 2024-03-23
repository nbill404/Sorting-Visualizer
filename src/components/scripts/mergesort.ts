// In-place merge sort
export function* mergesort(nums: number[], l: number, r: number) : Generator<number[], void, unknown> {
    if (l < r) {
        let m = Math.round(l + (r - l) / 2) - 1; // Round down
        
        for (const v of mergesort(nums, l, m)) {
            yield v;
        }

        for (const v of mergesort(nums, m + 1, r)) {
            yield v;
        }

        const generator = merge(nums, l, m, r);
        for (const v of generator) {
            yield v;
        }
    }
}

function* merge(nums: number[], l: number, m: number, r: number) {
    let i = l;
    let j = m + 1;

    while (i <= m && j <= r) {
        if (nums[i] <= nums[j]) {
            i++;
            
        } else {
            let value = nums[j];
            let index = j;

            while (index != i) {
                nums[index] = nums[index - 1];
                index--;
            }

            nums[i] = value;
                    
            i++;
            m++;
            j++;

            //yield [i, j];
        }
        yield [i, j];
        
    }
}