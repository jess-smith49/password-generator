

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
  var pass = window.prompt("Choose from Uppercase, lowercase, numeric, or special characters");
  var specialCharBool = false;
  var upperCaseBool = false;
  var lowerCaseBool = false;
  var numericBool = false;


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
  if (pass.includes ("numeric")) {
    numericBool = true;
  }
  
  
 
  //gets random # from arrays based on num
  var finalPass = "";
  //var currentChar 

  for (i = 0; i < num; i ++){

    if(upperCaseBool === true && lowerCaseBool === true && specialCharBool === true && numericBool === true){
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
  }

  //if one is false
  else if(upperCaseBool === true && lowerCaseBool === true && specialCharBool === true && numericBool === false){
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }
  else if (upperCaseBool === true && lowerCaseBool === true && numericBool === true && specialCharBool === false){
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
  }
  else if (upperCaseBool === true && lowerCaseBool === false && specialCharBool === true && numericBool === true){
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
  }
  else if (upperCaseBool === false && lowerCaseBool === true && specialCharBool === true && numericBool === true) {
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
  }

  //if two are false
  else if (upperCaseBool === false && lowerCaseBool === false && specialCharBool === true && numericBool === true){
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
  }
  else if (upperCaseBool === true && lowerCaseBool === true && specialCharBool === false && numericBool === false){
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }
  else if (upperCaseBool === true && lowerCaseBool === false && specialCharBool === true && numericBool === false){
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
  }
  else if (upperCaseBool === false && lowerCaseBool === true && specialCharBool === false && numericBool === true){
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
  }

  //if one is true
  else if (upperCaseBool === false && lowerCaseBool === false && specialCharBool === false && numericBool === true){
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
  }
  else if (upperCaseBool === false && lowerCaseBool === false && specialCharBool === true && numericBool === false){
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
  }
  else if (upperCaseBool === false && lowerCaseBool === true && specialCharBool === false && numericBool === false){
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }
  else if(upperCaseBool === true && lowerCaseBool === false && specialCharBool === false && numericBool === false){
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
  }

  //if all are false
  else if(upperCaseBool === false && lowerCaseBool === false && specialCharBool === false && numericBool === false){
    window.alert("You have selected none. A password will not be genrated");
    break;
  }
}

  /*for (i = 0; i < num; i ++){
    while (upperCaseBool === true)
    finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
    finalPass += upperCase[Math.floor(Math.random () * upperCase.length)]
    finalPass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    finalPass += randomNum[Math.floor(Math.random() * randomNum.length)]
    
  }*/

  //displays finalPass*/
  
  console.log(finalPass);
  window.alert(finalPass);

  
}
  






  
  














