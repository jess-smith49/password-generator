

//create an array for characters, lowercase, upper case, and numbers or an object array?

//var specialChar = [" !","#","$","%","&","()","*","+",",","-",".","/",":",";","<","=",">","?","@","[/]","^","_","`","{","|","}","~"];
//var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//for (i = 0, i > 8 || i < 128; i ++){









// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {  
  //calling the select password function
  select();


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);

}

// Add event listener to generate button
//When this is clicked, the write password functionis called
generateBtn.addEventListener("click", writePassword);


var select = function(){
  window.alert("Choose Password Criteria");

  var num = window.prompt("Select a password between 8 and 128 characters");
  for (num = 0; num >= 8 || num <=128;){
    window.prompt("Select Upercase, Lowercase, and at least one Special Character");
  }

  
  
  

  //call function to check if inputs are correct here

  //generate new password
}





  
  














