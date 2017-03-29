export const randGenerator = (min, max, lengthNumber) => {
  let randomNumbs = [];

  for (let i = 0; i < lengthNumber; i++) {
    randomNumbs.push(Math.floor(Math.random() * (max - min)) + min)
  }
  return randomNumbs
}
