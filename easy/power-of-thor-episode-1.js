var inputs = readline().split(' ')
const lightX = parseInt(inputs[0]) // the X position of the light of power
const lightY = parseInt(inputs[1]) // the Y position of the light of power
const initialTx = parseInt(inputs[2]) // Thor's starting X position
const initialTy = parseInt(inputs[3]) // Thor's starting Y position

let thorX = initialTx
let thorY = initialTy
// game loop
while (true) {
  const remainingTurns = parseInt(readline()) // The remaining amount of turns Thor can move. Do not remove this line.
  let dirX = ''
  let dirY = ''
  if (lightX - thorX > 0) {
    // go east
    dirX = 'E'
    thorX += 1
  } else if (lightX - thorX < 0) {
    // go west
    dirX = 'W'
    thorX -= 1
  }
  if (lightY - thorY > 0) {
    // go south
    dirY = 'S'
    thorY += 1
  } else if (lightY - thorY < 0) {
    // go north
    dirX = 'N'
    thorY -= 1
  }
  console.log(dirY + dirX)
}
