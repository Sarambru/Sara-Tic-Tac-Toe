'use strict'

const store = require('./store')
$('#hide-Game').hide()
$('#hide-GameName').hide()
$('.hide-Restart').hide()
$('#newGame').hide()
const signUpSuccess = function (responseData) {
  $('.signUp-display').show()
  $('.signUp-display').text('Signed up successfully!')
  $('.signUp-display').addClass('text-success')
  console.log('responseData is', responseData)
  setTimeout(() => {
    $('#sign-up').hide()
  }, 2000)
  setTimeout(() => {
    $('.signUp-display').hide()
    $('.signUp-display').text('')
    $('.signUp-display').removeClass('text-success')
  }, 2000)
}

const signUpFailure = function (error) {
  $('#signUpFail').show()
  $('#signUpFail').text('Sign up failed, Try Again')
  $('#signUpFail').addClass('text-danger')
  setTimeout(() => {
    $('#signUpFail').hide()
    $('#signUpFail').text('')
    $('#signUpFail').removeClass('text-danger')
  }, 2000)
  console.error('error is' + error)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('.signIn-display').text('Signed In successfully')
  $('.signIn-display').addClass('text-success')
  $('#hide-after-signUp').text('Click New Game / Show Board To Continue!')
  $('.hide-Restart').show()
  $('#newGame').show()
  $('#sign-up').hide()
  $('#hide-GameName').show()
  setTimeout(() => {
    $('#sign-in').hide()
    $('.signIn-display').text('')
    $('.signIn-display').removeClass('text-success')
  }, 2000)
}

const signInFailure = (error) => {
  $('#signInFail').show()
  $('#signInFail').text('Sign In failed, Incorrect Email or Password')
  $('#signInFail').addClass('text-danger')
  setTimeout(() => {
    $('#signInFail').hide()
    $('#signInFail').text('')
    $('#signInFail').removeClass('text-danger')
  }, 2000)
  console.error('error is' + error)
}
const signOutSuccess = (responseData) => {
  $('.signOut-display').show()
  $('.signOut-display').text('Signed Out Successfully!')
  console.log('This is working')
  $('.signOut-display').addClass('text-success')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#hide-after-signUp').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('.hide-Restart').hide()
  $('#hide-Game').hide()
  $('#newGame').hide()
  $('#player').hide()
  $('#hide-GameName').hide()
  $('#hide-after-signUp').text('Please Sign Up and Sign In to play!')
  setTimeout(() => {
    $('.signOut-display').hide()
    $('.signOut-display').text('')
    $('.signOut-display').removeClass('text-success')
  }, 5000)
}

const signOutFailure = (error) => {
  $('.signOut-display').show()
  $('.signOut-display').text('Sign Out failed / Not Signed In')
  $('.signOut-display').addClass('text-danger')
  setTimeout(() => {
    $('.signOut-display').hide()
    $('.signOut-display').text('')
    $('.signOut-display').removeClass('text-danger')
  }, 5000)
  console.error('error is' + error)
}

const newGameSuccess = (responseData) => {
  $('#hide-Game').show()
  $('#player').show()
  $('#hide-after-signUp').hide()
  $('#newGameSuccess').show()
  $('#newGameSuccess').text('New Game Started successfully')
  $('#newGameSuccess').addClass('text-success')
  $('#hide-GameName').show()

  setTimeout(() => {
    $('#newGameSuccess').hide()
    $('#newGameSuccess').text('')
    $('#newGameSuccess').removeClass('text-success')
  }, 2000)
}
const newGameFailure = (error) => {
  $('#newGame').text('New Game failed')
  $('#newGame').addClass('text-danger')
  console.error('error is' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameFailure,
  newGameSuccess
}
