
let container;

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      container = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = container;
      bubbleSort(arr);
    }
  }
  return arr;
}

//think about using another for loop rather than recursion

// let bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] < arr[i]) {
//       for (let j = 0; j < arr.length - 1; j++) {
//         container = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = container
//       }
//       // bubbleSort(arr);
//     }
//   }
//   return arr;
// }


export default bubbleSort;
