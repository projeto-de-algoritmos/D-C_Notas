function merge(left, right) {
  let arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

export function mergeSort(array) {
  const half = array.length / 2

  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left), mergeSort(array))
}

//var arey = [2, 0, 34, 6, 1, 0, 87, 9, 5, 99, 7, 3, -1]

//var orde = mergeSort(arey)

//console.log("Esse é o array ordenado", orde)