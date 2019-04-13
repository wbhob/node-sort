import { insertionSort } from '../src/insertion-sort'
import { unsortedArray, sortedArray } from './utils';

describe('insertion sort', () => {
  it('should sort an array', () => {
    expect(insertionSort(unsortedArray)).toEqual(sortedArray)
  })
})