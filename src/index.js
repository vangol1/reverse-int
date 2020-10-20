module.exports = function reverse (n) {
  let digits = n.toString().split('')
  digits.reverse()
  let res = digits.join('')
  return parseFloat(res)
}
