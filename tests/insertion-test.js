const insertionSort = require('../scripts/insertion-sort')
const assert = require('chai').assert


describe('insertionSort', () => {
  let numbs = [6, 30, 1, 99, 2, 98, 7, 92, 88, 1, 40, 5, 99, 100, 77, 20, 1, 80]
  let letters = ['d', 'b', 'c', 'a']
  let randomNumbs = []

  function ran () {
    for (let i = 0; i < 20; i++) {
      randomNumbs.push(Math.floor(Math.random() * (100 - 1)) + 1)
    }
    return randomNumbs
  }
  
  ran()

  it('should be a function', () =>{

    assert.isFunction(insertionSort)
  })

  it('should sort letters', () => {

    assert.deepEqual(insertionSort(letters),
    ["a", "b", "c", "d"])
  })

  it('should sort a different array of defined letters', () => {

    let testerNumb = ['r', 'g', 'z', 'c', 'a', 'l']

    assert.deepEqual(insertionSort(testerNumb), ['a', 'c', 'g', 'l', 'r', 'z'])
  })

  it('should sort numbers', () => {

    assert.deepEqual(insertionSort(numbs),
    [1, 1, 1, 2, 5, 6, 7, 20, 30, 40, 77, 80, 88, 92, 98, 99, 99, 100])
  })

  it('should sort a different array of defined numbers', () => {

    let testerNumb = [19, 76, 9, 41, 75]

    assert.deepEqual(insertionSort(testerNumb), [9, 19, 41, 75, 76])
  })

  it('should sort random numbers', () => {

    let rands = insertionSort(randomNumbs)

    assert.equal(rands[0] <= rands[1], true)
    assert.equal(rands[0] <= rands[3], true)
    assert.equal(rands[1] <= rands[2], true)
    assert.equal(rands[17] >= rands[2], true)
    assert.equal(rands[18] <= rands[19], true)
  })

})
