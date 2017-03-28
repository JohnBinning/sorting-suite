function mergeSort (arr) {

  if (arr.length === 1) {
    return arr
  }
  var mid = arr.length / 2
  var left = arr.slice(0, mid)
  var right = arr.slice(mid, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right)  {
  var sorted = []

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      sorted.push(right.shift())
    } else {
      sorted.push(left.shift())
    }
  } while (left.length) {
    sorted.push(left.shift())
  } while (right.length) {
    sorted.push(right.shift())
  }
  return sorted
}

module.exports = mergeSort;
