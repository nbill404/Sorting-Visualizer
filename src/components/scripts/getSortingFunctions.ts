import { selectionsort } from './selectionsort';
import { insertionsort } from './insertionsort';
import { mergesort } from './mergesort';
import { quicksort } from './quicksort';
import { bubblesort } from './bubblesort';
import { heapsort } from './heapsort';
import { countingsort } from './countingsort';
import { radixsort } from './radixsort';
import { shellsort } from './shellsort';
import { combsort } from './combsort';

export function getSort(s: string, nums: number[]) : Generator<number[], void, unknown>{
    // This will ensure functions are imported properly to be able to call them // eval doesn't work if not previously referenced
    switch (s) {
      case "selectionsort": 
        return selectionsort(nums);
      case "insertionsort":
        return insertionsort(nums);
      case "shellsort":
        return shellsort(nums);
      case "mergesort":
        return mergesort(nums, 0, nums.length - 1);
      case "quicksort":
        return quicksort(nums, 0, nums.length - 1);
      case "bubblesort":
        return bubblesort(nums);
      case "heapsort":
        return heapsort(nums);
      case "countingsort":
        return countingsort(nums);
      case "radixsort":
        return radixsort(nums);
      case "combsort":
        return combsort(nums);
      default:
        return selectionsort(nums);
    }
  }