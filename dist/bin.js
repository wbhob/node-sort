'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const sum_1 = require('./sum')
let result
console.log(typeof +process.argv[1])
if (process.argv[3]) {
  result = sum_1.sum(+process.argv[2], +process.argv[3])
} else {
  result = sum_1.sum(+process.argv[1], +process.argv[2])
}
console.log(result)
