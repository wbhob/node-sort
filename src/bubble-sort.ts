export function bubbleSort(array: any[]) {
  // it won't take more than array.length iterations
  for (let i = 0; i < array.length; i++) {
    // store to check if a swap took place in this iteration
    let swapped = false

    // bubble sort through each value
    for (let j = 1; j < array.length; j++) {
      // if left value is bigger than the right, swap them
      if (array[j - 1] > array[j]) {
        let memory = array[j]
        array[j] = array[j - 1]
        array[j - 1] = memory
        swapped = true
      }
    }

    // if there were no swaps in this iteraion, then it is sorted
    if (!swapped) break
  }
  return array
}
