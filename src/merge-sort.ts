export function mergeSort(array: any[]) {
  const length = array.length

  // if there are two entries, swap them if they are not in order
  if (length == 2) {
    if (array[0] > array[1]) {
      const memory = array[1]
      array[1] = array[0]
      array[0] = memory
    }
    return array
  }

  // if there is one entry, return itself
  else if (length == 1) {
    return array
  }

  // if there are more than 2 entries,
  // make smaller arrays and merge them
  else {
    const mid = Math.floor(length / 2)

    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))

    let i = 0,
      j = 0
    let clone = []

    while (i < left.length || j < right.length) {
      if (left[i] > right[j] || left[i] == undefined) {
        clone.push(right[j])
        j++
      } else {
        clone.push(left[i])
        i++
      }
    }

    return clone
  }
}
