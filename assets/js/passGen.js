
var password = document.getElementById("password");

function generate() {
    var password = "";
    var lowercaseSet = document.getElementById("lowercase").checked;
    var uppercaseSet = document.getElementById("uppercase").checked;
    var numericSet = document.getElementById("numeric").checked;
    var specialSet = document.getElementById("special").checked;
    var passwordLength = document.getElementById("pssLength").value - 1;  
    var chars = "";
    if(lowercaseSet){
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if(uppercaseSet){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(numericSet){
        chars += "0123456789";
    }
    if(specialSet){
        chars += "!@#$%^&*()";
    }
    if(chars === ""){
        window.alert("Must check which characters to include!");
    } else if(passwordLength < 8 || passwordLength > 128){
        window.alert("Password length must be 8 - 128 characters!");
    }
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    
    document.getElementById("password").value = password;
}