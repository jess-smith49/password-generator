

//Made individual arrays, call random function, use .length

   var specialChar = ["!","#","$","%","&","()","*","+",",","-",".","/",":",";","<","=",">","?","@","[/]","^","_","`","{","|","}","~"];
   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var randomNum = ["1", "2", "3", "4", "4", "6", "7", "8", "9", "0"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {  
  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//When this is clicked, the write password function is called
generateBtn.addEventListener("click", writePassword);


//generate password function return value
function generatePassword() {

  window.alert("Choose Password Criteria");
  
  //password lenght criteria
  var num = window.prompt("Select a password between 8 and 128 characters");
  if (num === "" || num > 128 || num < 8){
    window.alert("Must select from range");
    return null;
  }
 

  
//chooses criteria for password in prompt
  var pass = window.prompt("Choose from Uppercase, lowercase, or special characters");
  var specialCharBool = false;
  var upperCaseBool = false;
  var lowerCaseBool = false;


 pass = pass.toLowerCase();
  if (pass.includes("uppercase")){
    upperCaseBool = true;  
  }
  if (pass.includes("lowercase")){
    lowerCaseBool = true;  
  }
  if (pass.includes("special characters")){
    specialCharBool = true;  
  } 
  
  
 
  //gets random # from arrays based on num
  var finalPass = "";
  //var currentChar 

  for (i = 0; i < num; i ++){
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
    
  }

  //displays finalPass*/
  
  console.log(finalPass);

  
}
  






  
  














