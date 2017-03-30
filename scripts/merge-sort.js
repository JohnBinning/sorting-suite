export const mergeSort = arr => {
  if (arr.length === 1) {
    return arr
  }
  var mid = arr.length / 2
  var leftArray = arr.slice(0, mid)
  var rightArray = arr.slice(mid, arr.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

// export const merge = (leftArray, rightArray) => {
//   var sorted = []
//
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] >= rightArray[0]) {
//       sorted.push(rightArray.shift())
//     } else {
//       sorted.push(leftArray.shift())
//     }
//   }
//
//   while (leftArray.length) {
//     sorted.push(leftArray.shift())
//   }
//
//   while (rightArray.length) {
//     sorted.push(rightArray.shift())
//   }
//
//   return sorted
// }

export const merge = (leftArray, rightArray) => {
  var sorted = []

  while (leftArray.length || rightArray.length) {

    if (leftArray[0] >= rightArray[0]) {
      sorted.push(rightArray.shift())

    } else if (leftArray.length < 1) {
      sorted.push(rightArray.shift())

    } else if (rightArray.length < 1) {
      sorted.push(leftArray.shift())

    } else {
      sorted.push(leftArray.shift())
    }
  }
  return sorted
}
// export default mergeSort;
