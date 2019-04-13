import { bubbleSort } from '../src/bubble-sort'
import { unsortedArray, sortedArray } from './utils';

describe('bubble sort', () => {
  it('should sort an array', () => {
    expect(bubbleSort(unsortedArray)).toEqual(sortedArray)
  })
})