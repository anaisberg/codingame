/**
 * Get greater count of three in a row!
 **/
const base = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const opponentGame = Array(10).fill(base)
const myGame = Array(10).fill(base)

function isNextToOpponent (row, col) {
  if (opponentGame[row - 1][col] === 1) {
    opponentGame[row - 1][col] = 2
    return 2
  } else if (opponentGame[row+1][col] === 1) {
    opponentGame[row + 1][col] = 2
    return 2
  } else if (opponentGame[row][col+1] === 1) {
    opponentGame[row][col + 1] = 2
    return 2
  } else if (opponentGame[row][col-1] === 1) {
    opponentGame[row][col - 1] = 2
    return 2
  } else if (opponentGame[row - 1][col - 1] === 1) {
    opponentGame[row - 1][col - 1] = 2
    return 2
  } else if (opponentGame[row + 1][col + 1] === 1) {
    opponentGame[row + 1][col + 1] = 2
    return 2
  } else {
    return 1
  }
}

function findBlockingCoord (row, col) {
  if (opponentGame[row - 1][col] === 1) {
    return [row + 1, col]
  } else if (opponentGame[row + 1][col] === 1) {
    return [row - 1, col]
  } else if (opponentGame[row][col + 1] === 1) {
    return [row, col - 1]
  } else if (opponentGame[row][col - 1] === 1) {
    return [row, col + 1]
  } else if (opponentGame[row - 1][col - 1] === 1) {
    return [row + 1, col + 1]
  } else if (opponentGame[row + 1][col + 1] === 1) {
    return [row - 1, col - 1]
  } else {
    return [-1, -1]
  }
}

let newCoord = '0 0'
let blockingCoord = []

// game loop
while (true) {
  const inputs = readline().split(' ')
  const opponentRow = parseInt(inputs[0]) // The coordinates of your opponent's last move
  const opponentCol = parseInt(inputs[1])
  console.error(opponentGame[opponentRow][opponentCol])
  console.error(isNextToOpponent(opponentRow, opponentCol))
  opponentGame[opponentRow][opponentCol] = isNextToOpponent(opponentRow, opponentCol)
  // console.error(opponentGame)
  if (opponentGame[opponentRow][opponentCol] === 2) {
    console.error('in the if')
    blockingCoord = findBlockingCoord(opponentRow, opponentCol)
    console.error(opponentGame)
  }
  console.error(blockingCoord)
  const validActionCount = parseInt(readline()) // the number of possible actions for your next move
  for (let i = 0; i < validActionCount; i++) {
    const inputs = readline().split(' ')
    const row = parseInt(inputs[0]) // The coordinates of a possible next move
    const col = parseInt(inputs[1])
    if (row === blockingCoord[0] && col === blockingCoord[1]) {
      console.log(row + ' ' + col)
      console.error(blockingCoord)
    }
    if (isNextToOpponent(opponentRow, opponentCol, row, col)) {
      newCoord = row + ' ' + col
    }
  }

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');
  console.log(newCoord)
}
