import { gnomeSort } from '../src/gnome-sort'
import { unsortedArray, sortedArray } from './utils'

describe('gnome sort', () => {
  it('should sort an array', () => {
    expect(gnomeSort(unsortedArray)).toEqual(sortedArray)
  })
})
