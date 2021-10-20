'use strict'

const signUpSuccess = function (responseData) {
  $('.signUp-display').show()
  $('.signUp-display').text('Signed up successfully!')
}

const signUpError = function (error) {
  $('#signUpError').show()
  $('#signUpError').text('Sign up failed, check email and password')
  console.error('the error is' + error)

  const signInError = (error) => {
    $('#signInWeeor').text('Sign In failed, Incorrect Email or Password')
    console.error('the error is' + error)
  }
}

module.exports = {
  signUpError,
  signInError,
  signUpSuccess
}
