
/*var password=document.getElementById("pssLength");

function generate() {
    var passwordLength = document.getElementById("pssLength").value;
    console.log("Value is " + passwordLength);
}*/

var password=document.getElementById("password");

function generate() {
    var password = "";
    var lowercaseSet = document.getElementById("lowercase").checked;
    var uppercaseSet = document.getElementById("uppercase").checked;
    var numericSet = document.getElementById("numeric").checked;
    var specialSet = document.getElementById("special").checked;
    var passwordLength = document.getElementById("pssLength").value;  
    var chars = "";
    if(chars.length === 0){
        window.alert("Must specify password length!")
    }
    if(lowercaseSet){
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if(uppercaseSet){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(numericSet){
        chars += "0123456789"
    }
    if(specialSet){
        chars += "!@#$%^&*()"
    }
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
}


/*
function generate() {
    var password = "";
    //var passwordLength = 8;
    var passwordLength = document.getElementById("pssLength").value;  
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
} */

/*function generate(){
    var lowercaseSet = document.getElementById("lowercase").checked;
    console.log(lowercaseSet)
}*/

//var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";