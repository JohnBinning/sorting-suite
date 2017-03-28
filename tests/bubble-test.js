import { assert } from 'chai'
import bubbleSort from '../scripts/bubble-sort'


describe('bubbleSort', () => {
  let numbs = [3, 1, 4, 2]
  let letters = ['d', 'b', 'c', 'a']
  let randomNumbers = []

  function ran () {
    for (let i = 0; i < 20; i++) {
      randomNumbers.push(Math.floor(Math.random() * (100 - 1)) + 1)
    }
    return randomNumbers
  }
  
  ran()


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

  it('should sort numbers', () => {

    assert.deepEqual(bubbleSort(numbs),
    [1, 2, 3, 4])
  })

  it('should sort a different array of defined numbers', () => {

    let testerNumb = [19, 76, 9, 41, 75]

    assert.deepEqual(bubbleSort(testerNumb), [9, 19, 41, 75, 76])
  })

  it('should sort random numbers', () => {

    bubbleSort(randomNumbers)

    assert.equal(randomNumbers[0] <= randomNumbers[1], true)
    assert.equal(randomNumbers[0] <= randomNumbers[3], true)
    assert.equal(randomNumbers[1] <= randomNumbers[2], true)
    assert.equal(randomNumbers[17] >= randomNumbers[2], true)
    assert.equal(randomNumbers[18] <= randomNumbers[19], true)
  })

})
