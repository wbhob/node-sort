import { cocktailShakerSort } from '../src/cocktail-shaker-sort'
import { unsortedArray, sortedArray } from './utils';

describe('cocktail shaker sort', () => {
  it('should sort an array', () => {
    expect(cocktailShakerSort(unsortedArray)).toEqual(sortedArray)
  })
})