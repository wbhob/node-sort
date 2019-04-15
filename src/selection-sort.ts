export function selectionSort(array: any[]) {
  // it won't take more than array.length iterations
  for (let i = 0; i < array.length; i++) {
    // iterate over the unsorted part of the array
    for (let j = i; j < array.length; j++) {
      // if something further
      if (array[i] > array[j]) {
        let memory = array[i]
        array[i] = array[j]
        array[j] = memory
      }
    }
  }
  return array
}
