// Assignment Code
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

//variables
let generateBtn = document.querySelector("#generate")
let upperCase = document.querySelector("#upperCase")
let lowerCase = document.querySelector("#lowerCase")
let numericChar = document.querySelector("#numericChar")
let specialChar = document.querySelector("#specialChar")

//characters
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numChars = "1234567890"
let specChars = "!@#$%^&*_-"

//<---->// START
//password options 

//length

//characters
function userOptions(){
  let userSelection = "" //variable to create string based on input

  if (upperCase.checked === true){
    userSelection += upperChars
    console.log("uppercase")
  }

  if (lowerCase.checked === true){
    userSelection += lowerChars
    console.log("lowercase")}

  if (numericChar.checked === true){
    userSelection += numChars
    console.log("numeric")}

  if (specialChar.checked === true){
    userSelection += specChars
    console.log("special")}
}

userOptions()
//<---->// END

//password generation

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
