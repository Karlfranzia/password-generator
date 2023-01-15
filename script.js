// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    var allowedChars = []
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var numbers = ["1","2","3","4","5","6","7","8","9","0"]
    var specialChars = ["!","@","#","$","%","^","&","*",".",";",":"]


    function pl(){
      passwordLength = prompt("How long would you like your password to be?");
      if (passwordLength > 8 && passwordLength < 18){
        uc()
        console.log("password length is " + passwordLength)
      }else{
        alert("Password must be between 8 and 18 characters long.")
        pl()
      }
    }
    
    function uc() {
      if (window.confirm("Allow uppercase?")){
          for (i = 0; i < upperCase.length; i++){
            allowedChars.push(upperCase[i])
          }
          console.log(allowedChars)  
        lc();
      }else{
        lc();
      }
    }

    function lc() {
      if (window.confirm("Allow lowercase?")){
        for (i = 0; i < lowerCase.length; i++){
          allowedChars.push(lowerCase[i])
        }
        console.log(allowedChars)
        int();
      }else{
        int();
      }
    }

    function int() {
      if (window.confirm("Allow numbers?")){
        for (i = 0; i < numbers.length; i++){
          allowedChars.push(numbers[i])
        }
        console.log(allowedChars)
        symbols();
      }else{
        symbols();
      }
    }

    function symbols() {
      if (window.confirm("Allow special characters?")){
        for (i = 0; i < specialChars.length; i++){
          allowedChars.push(specialChars[i])
        }
        console.log(allowedChars)
        generate();
      }else{
        generate();
      }
    }

    function generate() {
      for (i = 0; i < passwordLength; i++){
        password.push(allowedChars[random(0,allowedChars.length)])
      }
      console.log(password)
    }
    pl()
  }
 
  var password = []
  generatePassword()
  var passwordText = document.querySelector("#password");
  password = password.join("")
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
