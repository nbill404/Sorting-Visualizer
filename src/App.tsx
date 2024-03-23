import Button from './components/Button';
import Slider from './components/Slider';
import Bars from './components/Bars';
import Select from './components/Select';
import { useEffect, useState } from 'react';

import { randomize } from './components/scripts/randomize';
import { getSort } from './components/scripts/getSortingFunctions';

const sleep = (ms : number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default function App () {
  const selectSorts = [
    ["selectionsort", "Selection Sort"], 
    ["insertionsort", "Insertion Sort"], 
    ["shellsort", "Shell Sort"],
    ["bubblesort", "Bubble Sort"],
    ["combsort", "Comb Sort"], 
    ["mergesort", "Merge Sort"], 
    ["quicksort", "Quick Sort"], 
    ["heapsort", "Heap Sort"],
    ["countingsort", "Counting Sort"],
    ["radixsort", "Radix Sort"]
    ];
  const selectColours = [["#cfc", "Green"], ["#ED4B49", "Red"], ["#089BCC", "Blue"], ["#ffd86e", "Yellow"]]

  const [sortSize, setSortSize] = useState(100);
  const [barColour, setBarColour] = useState("#cfc");
  const [nums, setNums] = useState(randomize(100, 100));
  const [highlighted, setHighlighted] = useState([-1, -1]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [sortFunc, setSortFunc] = useState("selectionsort");

  useEffect(() => {
    let mounted = true;

    if (isDisabled) {
      (async () => {
        let l = Object.assign([], nums.slice(-sortSize));
        const generator = getSort(sortFunc, l);

        for (const v of generator) {
          if (mounted) {
            await sleep(20);
            setNums(l);
            setHighlighted(v);
          } else {
            break;
          }
        }
      
        setHighlighted([-1, -1]);
        setIsDisabled(false);
      })();
    }

    return () => mounted = false;
    
  }, [isDisabled]);

  useEffect(() =>  {
    setNums(randomize(sortSize, 100));
  }, [sortSize])

  const handleSortButton = () => {
    setIsDisabled(!isDisabled);
  }

  const getSliderValue = (e) => {
    setSortSize(e.target.value * 10); // Range 10 - 100
  }

  const handleRandomButton = () => {
    setNums(randomize(sortSize, 100));
    setHighlighted([-1, -1])
  }

  const handleSelectColour = (e) => {
    setBarColour(e.target.value);
  }

  const handleSelectSort = (e) => {
    setSortFunc(e.target.value);
  }

  return (
    <html>
      <body className='bg-light min-vh-100'> 
        <div className='p-0 m-0'>
          <h1 className='text-center pt-2'>Sorting Visualizer</h1>
          <div className="container border border-primary rounded-1 mt-4 px-3 pb-3 h-100">
            <Bars nums={nums} colour={barColour} size={sortSize} highlight={highlighted}/>
          </div>
          <div className='container w-25 p-3'>
            <div>
              <div className='row'>
                  <Slider sliderDisabled={isDisabled} changeEvent={getSliderValue}/>
              </div>
              <div className='row pt-1'>
                <p className='fw-semibold'>List Size = {sortSize}</p>
              </div>
              <div className='row pt-1'>
                  <Select listValues={selectColours} changeEvent={handleSelectColour} selectDisabled={isDisabled}/>
              </div>
                <div className='row pt-2'>
                  <Select listValues={selectSorts} changeEvent={handleSelectSort} selectDisabled={isDisabled}/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-1 offset-md-5'>
                <Button text={isDisabled ? "Stop" : "Begin"} clickEvent={handleSortButton} buttonDisabled={false}/>
              </div>
              <div className='col-1'>
                <Button text="Randomize" clickEvent={handleRandomButton} buttonDisabled={isDisabled}/>
              </div>
            </div>

        </div>
    </body>
  </html>
  );
}

