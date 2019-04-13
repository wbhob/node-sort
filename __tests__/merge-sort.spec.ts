import { mergeSort } from '../src/merge-sort'
import { unsortedArray, sortedArray } from './utils';

describe('merge sort', () => {
  it('should sort an array', () => {
    expect(mergeSort(unsortedArray)).toEqual(sortedArray)
  })
})