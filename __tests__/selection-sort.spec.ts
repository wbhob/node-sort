import { selectionSort } from '../src/selection-sort'
import { unsortedArray, sortedArray } from './utils'

describe('selection sort', () => {
  it('should sort an array', () => {
    expect(selectionSort(unsortedArray)).toEqual(sortedArray)
  })
})
