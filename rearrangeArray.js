function fixTheMeerkat(arr) {
  let front = arr.pop()
  let back = arr.shift()
  arr.unshift(front)
  arr.push(back)
  return arr
}
