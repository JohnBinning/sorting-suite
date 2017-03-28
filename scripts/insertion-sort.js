const insertionSort = (arr, sorted = []) => {
  if (arr.length == 0) {
    return sorted
  }
  let container = arr.shift()

  for (let j = sorted.length; j >= 0; j--) {
    if (container > sorted[ j - 1 ]) {
      sorted.splice(j, 0, container)
      return insertionSort(arr, sorted);
    }
  }
  sorted.splice(0, 0, container);
  return insertionSort(arr, sorted);
}

// try with two for loops and what is speed difference / how many items can it sort?


// const insertionSort = (arr) => {
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

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let greaterIndexI = arr[i]
//
//     for (var j = i - 1; j >= 0; j--) {
//       if (greaterIndexI <= arr[j]) {
//         var lesserIndex = arr[j]
//
//         arr[j] = greaterIndexI
//         arr[j + 1] = lesserIndex
//       }
//     }
//   }
//   return arr
// }


module.exports = insertionSort;
