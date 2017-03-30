// export const insertionSort = (arr, sorted = []) => {
//   if (arr.length == 0) {
//     return sorted
//   }
//   let container = arr.shift()
//
//   for (let j = sorted.length; j >= 0; j--) {
//     if (container > sorted[ j - 1 ]) {
//       sorted.splice(j, 0, container)
//       return insertionSort(arr, sorted);
//     }
//   }
//   sorted.splice(0, 0, container);
//   return insertionSort(arr, sorted);
// }


// export const insertionSort = arr => {
//   for (let i = 1; i < arr.length; i++) {
//     let greaterIndexI = arr[i]
//
//     for (var j = i - 1; arr[j] > greaterIndexI; j--) {
//       var sortedJ = arr[j]
//
//       arr[j + 1] = sortedJ
//     }
//     arr[j + 1] = greaterIndexI
//   }
//   return arr
// }

export const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let greaterIndexI = arr[i]
    let lesserIndex = arr[j]

    for (var j = i - 1; j >= 0; j--) {
      if (greaterIndexI <= arr[j]) {
        lesserIndex = arr[j]

        arr[j] = greaterIndexI
        arr[j + 1] = lesserIndex
      } else {
        break
      }
    }
  }
  return arr
}

// export default insertionSort;
