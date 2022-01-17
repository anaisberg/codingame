// for now I only do the minimax algorithm
// but I have to implement the alpha-beta pruning for more efficiency
// it will help skip some computations
// minimax: https://en.wikipedia.org/wiki/Minimax
// alpha-beta pruning: https://en.wikipedia.org/wiki/Alpha-beta_pruning

function getChildren (tree, width) {
  const child = []
  const slice = tree.splice(0, width)
  for (let i = 0; i < slice.length; i++) {
    child.push(parseInt(slice[i]))
  }
  return child
}

function minimax (tree, depth, maxi) {
  const nextNode = getChildren(LEAFS, B)
  if (depth === D - 1) {
    if (maxi) {
      return [Math.max(...nextNode), B + 1]
    } else {
      return [Math.min(...nextNode), B + 1]
    }
  } else if (maxi) {
    const nextMinimax = minimax(tree, depth + 1, false)
    return [Math.max(nextMinimax[0], Math.max(...nextNode)), nextMinimax[1] + 1 + B + 1]
  } else {
    const nextMinimax = minimax(tree, depth + 1, true)
    return [Math.min(nextMinimax[0], Math.min(...nextNode)), nextMinimax[1] + 1 + B + 1]
  }
}

const inputs = readline().split(' ')
const D = parseInt(inputs[0])
const B = parseInt(inputs[1])
const LEAFS = readline().split(' ')

const result = minimax(LEAFS, 0, true)
console.log(result[0] + ' ' + result[1])
