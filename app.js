const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

// const newItems = _.flattenDeep(items)
newItems= _.chunk(array, 3)

console.log(newItems)