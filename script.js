// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var choices = {};

function generatePassword() {
  var passwordLength =  parseInt(prompt("How long do want your  password to be? Must be between 8 and 128 character") )
  if (passwordLength <8) {
    alert("password must be at least 8 characters") 
    return
  }
  if (passwordLength >128) {
    alert("password must be less than 128 characters")
    return 
  }
  var lowerCase = confirm ("Do you want lower case letters in your password?")
  var upperCase = confirm ("Do you want upper case letters in your password?")
  var numeric = confirm ("Do you want numeric numbers in your password?")
  var specialCharacters = confirm ("Do you want special characters in your password?")
  if (!lowerCase && !upperCase && !numeric && !specialCharacters ){
    alert ("please select at least one option") 



  }

  var choiceSets = ["lowerCase","upperCase", "number","specialCharacters"]
  var password = choiceSet (generatePassword);
  function generatepassword () {
  
 }
return
      
    }
    

  
 

  

  
 
  



