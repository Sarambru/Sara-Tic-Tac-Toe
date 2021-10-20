// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#log-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.game--restart').hide()
  $('#after-sign-in').hide()
});
const { apiUrl } = require('./config')
const getFormFields = require('./get-form-fields')
const api = require('./api')
const ui = require('./ui')
const authEvents = require('./events')



const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure)
}

const onSignOut = function () {
  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure)
}

// let

// const userMove = function () {

// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}

// sign up message

function logSubmit(event) {
  log.textContent = 'You have created an account!'
  event.preventDefault()
}

const form = document.getElementById('sign-up-form')
form.addEventListener('submit', myFunction)

function myFunction () {
  alert('You are now registered!')
}




















// declare variables

const statusDisplay = document.querySelector('.game--status')

let gameActive = true
let currentPlayer = 'X'
let gameState = ['', '', '', '', '', '', '', '', '']

const winningMessage = () => `Player ${currentPlayer} has won!`
const drawMessage = () => 'Game ended in a draw!'
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

statusDisplay.innerHTML = currentPlayerTurn()

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function handleCellPlayed (clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}

function handlePlayerChange () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  statusDisplay.innerHTML = currentPlayerTurn()
}

function handleResultValidation () {
  let roundWon = false
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i]
    let a = gameState[winCondition[0]]
    let b = gameState[winCondition[1]]
    let c = gameState[winCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      roundWon = true
      break
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = winningMessage()
    gameActive = false
    return
  }

  let roundDraw = !gameState.includes('')
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage()
    gameActive = false
    return
  }

  handlePlayerChange()
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  )

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return
  }

  handleCellPlayed(clickedCell, clickedCellIndex)
  handleResultValidation()
}

function handleRestartGame () {
  gameActive = true
  currentPlayer = 'X'
  gameState = ['', '', '', '', '', '', '', '', '']
  statusDisplay.innerHTML = currentPlayerTurn()
  document.querySelectorAll('.cell').forEach((cell) => (cell.innerHTML = ''))
}

document
  .querySelectorAll('.cell')
  .forEach((cell) => cell.addEventListener('click', handleCellClick))
document
  .querySelector('.game--restart')
  .addEventListener('click', handleRestartGame)
