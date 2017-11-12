// let container;

// export const bubbleSort = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] < arr[i]) {
//       container = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = container;
//       bubbleSort(arr);
//     }
//   }
//   return arr;
// }

// non-recursive = faster

export const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        // container = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = container;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

// export default bubbleSort;