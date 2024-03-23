export function* heapsort(nums: number[]): Generator<number[], void, unknown> {
    let n = nums.length;

    for (let i = Math.round(n / 2) - 1; i >= 0; i--) {
        for (const v of heapify(nums, n, i)) {
            yield v;
        }
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        yield [0, i];

        for (const v of heapify(nums, i, 0)) {
            yield v;
        }
    }

    yield [-1, -1];
}

function* heapify(nums: number[], n: number, i: number) : Generator<number[], void, unknown> {
    let largest = i;
    let l = (2 * i) + 1;
    let r = (2 * i) + 2;

    if (l < n && nums[l] > nums[largest]) {
        largest = l;
    }

    if (r < n && nums[r] > nums[largest]) {
        largest = r;
    }

    if (largest != i) {
        [nums[i], nums[largest]] = [nums[largest], nums[i]];
        yield [i, largest];

        for (const v of heapify(nums, n, largest)) {
            yield v;
        }
    }
}