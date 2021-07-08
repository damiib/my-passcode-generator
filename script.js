// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var choices = {};
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericArr = [1,2,3,4,5,6,7,8,9,0]
var specialChArr = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~",";",":","'",""]
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

    return

  }


  var choiceArr =[]
  if (lowerCase) {
    choiceArr.push(...lowerArr)    
  }
  if (upperCase) {
    choiceArr.push(...upperArr) 
  }
  if(numeric){
    choiceArr.push(...numericArr)
  }
if(specialCharacters){
  choiceArr.push(...specialCharactersArr)
}

  var ratherpasscode = ""
  for (let index = 0; index < passwordLength; index++) {
  
    var randomindex = Math.floor(Math.random()*choiceArr.length)
    ratherpasscode = ratherpasscode + choiceArr[randomindex]
  }

return ratherpasscode
    }
    

  
 

  

  
 
generateBtn.addEventListener("click",writePassword)  



