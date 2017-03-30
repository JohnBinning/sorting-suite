import { assert } from 'chai'
import { mergeSort, merge } from '../scripts/merge-sort'
import { randGenerator } from '../scripts/randGenerator'

describe('mergeSort', () => {
  let numbs = [6, 30, 1, 99, 2, 98, 7, 92, 88, 1, 40, 5, 99, 100, 77, 20, 1, 80]
  let letters = ['d', 'b', 'c', 'a']
  let randomLetters = [];

  function ranLetters() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for ( let i = 0; i < 15; i++ ) {
      let randL = alphabet.charAt(Math.floor(Math.random() * alphabet.length))

      randomLetters.push(randL);
    }
  }

  ranLetters()

  it('should be a function', () => {
    assert.isFunction(mergeSort)
  })

  it('should sort letters', () => {
    assert.deepEqual(mergeSort(letters),
    ["a", "b", "c", "d"])
  })

  it('should sort a different array of defined letters', () => {
    let testerLet = ['r', 'g', 'z', 'c', 'a', 'l']

    assert.deepEqual(mergeSort(testerLet), ['a', 'c', 'g', 'l', 'r', 'z'])
  })

  it('should sort random letters', () => {
    let randLets = mergeSort(randomLetters)

    assert.equal(randLets[0] <= randLets[1], true)
    assert.equal(randLets[0] <= randLets[3], true)
    assert.equal(randLets[1] <= randLets[2], true)
    assert.equal(randLets[12] >= randLets[2], true)
    assert.equal(randLets[9] <= randLets[14], true)
  })

  it('should sort numbers', () => {
    assert.deepEqual(mergeSort(numbs),
    [1, 1, 1, 2, 5, 6, 7, 20, 30, 40, 77, 80, 88, 92, 98, 99, 99, 100])
  })

  it('should sort a different array of defined numbers', () => {
    let testerNumb = [19, 76, 9, 41, 75]

    assert.deepEqual(mergeSort(testerNumb), [9, 19, 41, 75, 76])
  })

  it('should sort positive and negative numbers', () => {
    let negNumbs = [10, -4, -2, 18]

    assert.deepEqual(mergeSort(negNumbs), [-4, -2, 10, 18])
  })

  it('should return an array', () => {
    let testerNumb2 = [90, 1, 25, 7, 30]
    let sorted = mergeSort(testerNumb2)

    assert.equal(Array.isArray(sorted), true)
  })

  it('should sort random numbers', () => {
    let newRandNumbs = randGenerator(1, 100, 35000)
    let rands = mergeSort(newRandNumbs)

    assert.equal(rands[0] <= rands[1], true)
    assert.equal(rands[0] <= rands[3], true)
    assert.equal(rands[1] <= rands[2], true)
    assert.equal(rands[17] >= rands[2], true)
    assert.equal(rands[rands.length - 2] <= rands[rands.length - 1], true)
  })

  it('should always have the last index be the largest number', () => {
    let lastRandNumbs = randGenerator(1, 100, 100)

    let sorted = mergeSort(lastRandNumbs)

    assert.equal(sorted[sorted.length - 1] >=
    sorted[sorted.length - 2], true)
  })

  it('should keep array length the same', () => {
    let lengthArray = [2, 9, 5, 4]

    assert.equal(lengthArray.length, 4)
    let sortedLength = mergeSort(lengthArray)

    assert.deepEqual(sortedLength, [2, 4, 5, 9])
    assert.equal(sortedLength.length, 4)
  })

})

describe('merge of merge-sort', () => {

  it('should be a function', () => {
    assert.isFunction(merge)
  })

  it('should return an array', () => {
    let testerNumb = [2, 7, 90, 1]
    let testerNumb2 = [90, 1, 25, 7, 30]
    let sorted = merge(testerNumb, testerNumb2)

    assert.equal(Array.isArray(sorted), true)
  })

  it('the new array length should === the old arrays combined length', () => {
    let testerNumb = [2, 7, 90, 1]
    let testerNumb2 = [90, 1, 25, 7, 30]
    let origLengths = testerNumb.length + testerNumb2.length
    let sorted = merge(testerNumb, testerNumb2)

    assert.equal(sorted.length === origLengths, true)
  })

  it('should merge two sorted arrays', () => {
    let testerNumb = [1, 5, 9]
    let testerNumb2 = [2, 6, 10]
    let sorted = merge(testerNumb, testerNumb2)

    assert.deepEqual(sorted, [1, 2, 5, 6, 9, 10])
  })

  it('should merge two sorted arrays with negative values', () => {
    let testerNumb = [-1, -5, 9]
    let testerNumb2 = [-2, 6, 10]
    let sorted = merge(testerNumb, testerNumb2)

    assert.deepEqual(sorted, [-2, -1, -5, 6, 9, 10])
  })

})
