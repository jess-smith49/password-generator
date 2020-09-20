# Password - Generator

# Description
Generating a password based on specific requirements:

The User Story:
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

The Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria 
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters 
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


For the assignment I had to generate a password based on specific user inputs and requirements. I wrote my code in a function for generating the password which was then called in writing the password. To accomplish this, I had to create multiple arrays, the then randomize each one based on the input the user provided. This project allowed for experience with arrays, functions, specific methods in javascript (math.random) and validation. 

The main technology used was javascript, and focusing on functionality. I also used github and the computer terminal to assist in version control and creation/deletion. 

Screenshot of application: 
![screenshot](/assets/passwordgenerator.png)

Link to deployed application:
https://jess-smith49.github.io/password-generator/
