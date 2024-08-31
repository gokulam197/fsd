var email = document.getElementById("email");
var password = document.getElementById("password");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
let regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passerror = document.getElementById("passerror");

function validate(){
    if(email.value.trim()==""||password.value.trim()==""){
        alert("Fields cannot be empty!");
    return false;
    } 
    else{
    return true;
    }
}


function validate1(){   //signup page
    if(email.value.trim()==""||password1.value.trim()==""){
        alert("Fields cannot be empty!");
    return false;
    } else if(regexp.test(email.value)){
        if(password1.value == password2.value){
            return true; 
        } else{
            passerror.innerHTML = "Password doesn't match";
            error.style.color = "red";
            return false;
        }
        
    }
    else{
        alert("Email not valid!")
    return false;
    }
}