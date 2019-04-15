export function gnomeSort(array: any[]) {
  let i = 0
  while (i < array.length) {
    if (i == 0 || array[i] >= array[i - 1]) {
      i++
    } else {
      let memory = array[i]
      array[i] = array[i - 1]
      array[i - 1] = memory
      i--
    }
  }
  return array
}
