// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
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

// object containing all characters
var allCharacters = {
  lowercase: lowerCasedCharacters,
  uppercase: upperCasedCharacters,
  numbers: numericCharacters,
  special: specialCharacters
}

// testing object works
console.log(allCharacters.lowercase);
console.log(allCharacters.uppercase);
console.log(allCharacters.numbers);
console.log(allCharacters.special);

// Function to prompt user for password options
function getPasswordOptions() {
  console.log("password clicked")
  // password length - runs well
  var length = prompt("Choose a number between 8 and 128 for the length of your password?")
  console.log(length)
  if (length < 8) {
    alert("Please choose a number between 8 and 128.")
    var length = prompt("Please choose a new character length for your password between 8 and 128.")
    console.log(length)
  } else if (length > 128) {
    alert("Please choose a number between 8 and 128.")
    var length = prompt("Please choose a new character length for your password between 8 and 128.")
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


// ideas:
// under each confirm - if statement 
    // if variable = true, add to new array?
    // then go through all of them 
    // whatever is added to new array can be used to generate random selection from
    // loop? for (var i = 0; i < new array.length, i++)
    // choose (length) number of random characters and loop as many times as length
    // print on the screen new password.



// code copied from:https://www.programiz.com/javascript/examples/generate-random-strings for reference to generating random character

// program to generate random strings
// declare all characters
      // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      // function generateString(length) {
      //     let result = ' ';
      //     const charactersLength = characters.length;
      //     for ( let i = 0; i < length; i++ ) {
      //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      //     }

      //     return result;
      // }

      // console.log(generateString(5));



// Function for getting a random element from an array
// 3 - algorithm
function getRandom(allCharacters) {
  // random generator code source: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
  console.log("getRandom function runs")
  var random = random[Math.floor(Math.random()*allCharacters.length)];
  console.log(random);
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  if (lc = true) + (uc = true) + (num = true) + (spec = true) 
  {
    console.log("all true")
  }

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