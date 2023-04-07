// Assignment Code
var generateBtn = document.querySelector("#generate");
var password=document.getElementById("password");


function generatePassword(){
//gets value from add numbers option HTML
var n=document.getElementById("numbers");
var valN=n.value;
//gets value from add special characters option HTML
var s=document.getElementById("specialChar");
var valS=s.value;

var passwordLength;
var length=prompt("how many characters? must be at least 8");
 //checks length. if length is less than 8, the prompt runs until input is greater than 8
  if(length<8){
   length=prompt("how many characters? must be greater than 8");
   passwordLength=length;
  }
  //if input is more 128, user is prompted to enter number between 8-128
  if(length>128){
    length=prompt("how many characters? must be greater than 8 and less than 128");
    passwordLength=length;
   }
   //have to subtract 1 since password index starts at 0. else password will be 1 char longer than input
  passwordLength=length-1;

//switch statement to evalualte options in order to get the password with selected options
  switch(valN>=1 & valS>=1){
    //if both options are yes 
    case(valN ==1 & valS==1):
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        document.getElementById("password").value = password;
          }

        break;
    //if both options are no
    case(valN==2 & valS==2):
      var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        document.getElementById("password").value = password;
          }

        break;
    //if add numbers is yes and add special characters is no
    case(valN==1 & valS==2):
      var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        document.getElementById("password").value = password;
          }

        break;
    //if add numbers is no and add special characters is yes
    case(valN==2 & valS==1):
      var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        document.getElementById("password").value = password;
          }

        break;

 }
 
  


  }


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);{
  
}
