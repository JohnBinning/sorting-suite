import { assert } from 'chai'
import {bubbleSort} from '../scripts/bubble-sort'
import {randGenerator} from '../scripts/randGenerator'

describe('bubbleSort', () => {
  let numbs = [5, 3, 1, 4, 2]
  let letters = ['d', 'b', 'c', 'a']
  let randomLetters = []

  function ranLetters() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for ( let i = 0; i < 15; i++ ) {
      let randL = alphabet.charAt(Math.floor(Math.random() * alphabet.length))

      randomLetters.push(randL);
    }
  }

  ranLetters()

  it('should be a function', () =>{
    assert.isFunction(bubbleSort)
  })

  it('should sort letters', () => {
    assert.deepEqual(bubbleSort(letters),
    ["a", "b", "c", "d"])
  })

  it('should sort a different array of defined letters', () => {
    let testerNumb = ['r', 'g', 'z', 'c', 'a', 'l']

    assert.deepEqual(bubbleSort(testerNumb), ['a', 'c', 'g', 'l', 'r', 'z'])
  })

  it('should sort random letters', () => {
    let randLets = bubbleSort(randomLetters)

    assert.equal(randLets[0] <= randLets[1], true)
    assert.equal(randLets[0] <= randLets[3], true)
    assert.equal(randLets[1] <= randLets[2], true)
    assert.equal(randLets[12] >= randLets[2], true)
    assert.equal(randLets[9] <= randLets[14], true)
  })

  it('should sort numbers', () => {
    assert.deepEqual(bubbleSort(numbs),
    [1, 2, 3, 4, 5])
  })

  it('should sort a different array of defined numbers', () => {
    let testerNumb = [19, 76, 9, 41, 75]

    assert.deepEqual(bubbleSort(testerNumb), [9, 19, 41, 75, 76])
  })

  it('should sort negative numbers', () => {
    let negNumbs = [10, -4, -2, 18]

    assert.deepEqual(bubbleSort(negNumbs), [-4, -2, 10, 18])
  })

  it('should return an array', () => {
    let testerNumb2 = [90, 1, 25, 7, 30]

    bubbleSort(testerNumb2)
    assert.equal(Array.isArray(testerNumb2), true)
  })

  it('should sort random numbers', () => {
    let speedNumbers = randGenerator(1, 100, 5000)
    let randNumb = bubbleSort(speedNumbers)

    assert.equal(randNumb[0] <= randNumb[1], true)
    assert.equal(randNumb[0] <= randNumb[3], true)
    assert.equal(randNumb[1] <= randNumb[2], true)
    assert.equal(randNumb[17] >= randNumb[2], true)
    assert.equal(randNumb[randNumb.length - 2] <=
      randNumb[randNumb.length - 1], true)
  })

  it('should always have the last index be the largest number', () => {
    let randomNumbers = []

    function ran () {
      for (let i = 0; i < 20; i++) {
        randomNumbers.push(Math.floor(Math.random() * (100 - 1)) + 1)
      }
      return randomNumbers
    }
    ran()


    bubbleSort(randomNumbers)
    assert.equal(randomNumbers[randomNumbers.length - 1] >=
    randomNumbers[randomNumbers.length - 2], true)
  })

  it('should keep array length the same', () => {
    let lengthArray = [2, 9, 5, 4]

    assert.equal(lengthArray.length, 4)
    let sortedLength = bubbleSort(lengthArray)

    assert.deepEqual(sortedLength, [2, 4, 5, 9])
    assert.equal(sortedLength.length, 4)
  })

})
