const insertionSort = (arr, sorted = []) => {
  if (arr.length == 0) {
    return sorted
  }
  let container = arr.shift()

  // console.log(container + ' container')

  for (let j = sorted.length; j >= 0; j--) {
    if (container > sorted[ j - 1 ]) {
      sorted.splice(j, 0, container)
      return insertionSort(arr, sorted);
    }
  }
  sorted.splice(0, 0, container);
  return insertionSort(arr, sorted);
}




module.exports = insertionSort;
