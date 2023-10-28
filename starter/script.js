// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// 1 user input
function getPasswordOptions() {
  console.log("password clicked")
  // password length - runs well
  var length = prompt("Choose a number between 8 and 128 for the length of your password?")
  console.log(length)
  if (length < 8) {
    alert("Please choose a number between 8 and 128.")
    var length = prompt("Please choose a new character length for your password.")
    console.log(length)
  } else if (length > 128) {
    alert("Please choose a number between 8 and 128.")
    var length = prompt("Please choosea new character length for your password.")
    console.log(length)
  }
  // character types - runs well
  var lc = confirm("Would you like you password to include lowercase letters?")
  console.log(lc)
  var uc = confirm("Would you like you password to include uppercase letters?")
  console.log(uc)
  var num = confirm("Would you like you password to include numbers?")
  console.log(num)
  var spec = confirm("Would you like you password to include special characters?")
  console.log(spec)
  // 

}

// Function for getting a random element from an array
// 3 - algorithm
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  console.log("button clicked");
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);