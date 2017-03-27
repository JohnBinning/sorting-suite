const insertionSort = require('../scripts/insertion-sort')
const assert = require('chai').assert


describe('insertionSort', () => {
  // let arr = [3, 2, 1]

  it.skip('should return 1', () => {
    assert.equal(insertionSort(), 1)
  })

  it.skip('should be a function', () =>{
    assert.isFunction(insertionSort)
  })

  it.skip('should sort letters', () => {
    assert.equal(insertionSort(["d", "b", "a", "c"]),
    ["a", "b", "c", "d"])
  })

  it.skip('should sort letters', () => {
    assert.equal(insertionSort(["d", "b", "a", "c"]),
    ["a", "b", "c", "d"])
  })

})
