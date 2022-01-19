// for now I only do the minimax algorithm
// but I have to implement the alpha-beta pruning for more efficiency
// it will help skip some computations
// minimax: https://en.wikipedia.org/wiki/Minimax
// alpha-beta pruning: https://en.wikipedia.org/wiki/Alpha-beta_pruning

function getChildren (tree) {
  const child = []
  for (let i = 0; i < tree.length; i++) {
    child.push([parseInt(tree[i])])
  }
  return child
}

function createTree (leafs, depth, width) {
  let tree = getChildren(leafs)
  for (let i = depth - 1; i > 0; i--) {
    const newTree = []
    const k = Math.pow(width, i)
    for (let j = 0; j < k; j++) {
      newTree.push(tree.slice(j * width, j * width + width))
    }
    tree = newTree
  }
  return tree
}

function minimax (node, depth, maxi) {
  if (depth === 0) {
    return [node, 1]
  } else if (maxi) {
    let value = -1500
    let iter = 0
    for (let i = 0; i < node.length; i++) {
      const nextMinimax = minimax(node[i], depth - 1, false)
      value = Math.max(value, nextMinimax[0])
      iter += nextMinimax[1]
    }
    return [value, iter + 1]
  } else {
    let value = 1500
    let iter = 0
    for (let i = 0; i < node.length; i++) {
      const nextMinimax = minimax(node[i], depth - 1, true)
      value = Math.min(value, nextMinimax[0])
      iter += nextMinimax[1]
    }
    return [value, iter + 1]
  }
}

function alphabeta (node, depth, alpha, beta, maxi) {
  if (depth === 0) {
    return [node[0], 1]
  }
  if (maxi) {
    let value = -1500
    let iter = 0
    for (let i = 0; i < node.length; i++) {
      const nextMinimax = alphabeta(node[i], depth - 1, alpha, beta, false)
      value = Math.max(value, nextMinimax[0])
      iter += nextMinimax[1]
      if (value >= beta) {
        break
      }
      alpha = Math.max(alpha, value)
    }
    return [value, iter + 1]
  } else {
    let value = 1500
    let iter = 0
    for (let i = 0; i < node.length; i++) {
      const nextMinimax = alphabeta(node[i], depth - 1, alpha, beta, true)
      value = Math.min(value, nextMinimax[0])
      iter += nextMinimax[1]
      if (value <= alpha) {
        break
      }
      beta = Math.min(beta, value)
    }
    return [value, iter + 1]
  }
}

const inputs = readline().split(' ')
const D = parseInt(inputs[0])
const B = parseInt(inputs[1])
const LEAFS = readline().split(' ')
const tree = createTree(LEAFS, D, B)

const result = minimax(tree, D, true)
console.log(result[0] + ' ' + result[1])
