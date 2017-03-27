// const bubbleSort = require('../scripts/bubble-sort')
// const assert = require('chai').assert
import { assert } from 'chai'
import bubbleSort from '../scripts/bubble-sort'


describe('bubbleSort', () => {
  let numbs = [3, 1, 4, 2]
  let letters = ['d', 'b', 'c', 'a']

  it.skip('should return 1', () => {
    assert.equal(bubbleSort(), 1)
  })

  it('should be a function', () =>{
    assert.isFunction(bubbleSort)
  })

  it('should sort numbers', () => {
    assert.deepEqual(bubbleSort(numbs),
    [1, 2, 3, 4])
  })

  it('should sort letters', () => {
    assert.deepEqual(bubbleSort(letters),
    ["a", "b", "c", "d"])
  })

})
