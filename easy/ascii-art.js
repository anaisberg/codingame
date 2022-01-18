const L = parseInt(readline())
const H = parseInt(readline())
const T = readline()
const start = {}
const end = {}
for (let i = 0; i < 28; i++) {
  const maj = i + 65
  const min = i + 97
  start[min] = i * L
  start[maj] = i * L
  end[min] = i * L + L
  end[maj] = i * L + L
}
for (let i = 0; i < H; i++) {
  const ROW = readline()
  let output = ''
  for (let j = 0; j < T.length; j++) {
    const asciiVal = T[j].charCodeAt(0)
    const s = start[asciiVal]
    const e = end[asciiVal]
    if (typeof (start[asciiVal]) !== 'undefined') {
      output += ROW.substring(s, e)
    } else {
      output += ROW.substring(ROW.length - L, ROW.length)
    }
  }
  console.log(output)
}
