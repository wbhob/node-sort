export function insertionSort(array: any[]) {
  // for every item in the list
  for (let i = 1; i < array.length; i++) {
    // take the item at current index and walk it down the list
    // until it no longer needs to be swapped
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      // if left value is bigger than the right, swap them
      let memory = array[j]
      array[j] = array[j - 1]
      array[j - 1] = memory
    }
  }
  return array
}
