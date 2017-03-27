const mergeSort = require('../scripts/merge-sort')
const assert = require('chai').assert


describe('mergeSort', () => {
  it.skip('should return 1', () => {
    assert.equal(mergeSort(), 1)
  })

  it.skip('should be a function', () =>{
    assert.isFunction(mergeSort)
  })

  it.skip('should sort letters', () => {
    assert.equal(mergeSort(["d", "b", "a", "c"]),
    ["a", "b", "c", "d"])
  })

})
