
var password = document.getElementById("password");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passerror = document.getElementById("passerror");
let phone = document.getElementById("phone").value;
let phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;

function validate(){
    var email = document.getElementById("email").value;
    document.getElementById('emailError').textContent = '';
    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
        return false;
    }
    else
    return true;
    
    
}


/*function validate1(){   //signup page
    /*if(email.value.trim()==""||password1.value.trim()==""){
        alert("Fields cannot be empty!");
    return false;
    } 
    else 
    if(regexp.test(email.value)){
        alert("email");
            /*if (!phonePattern.test(phone.value)) {
                
                event.preventDefault();
                document.getElementById('phoneError').textContent = 'Phone number must be 10 digits or in the format XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX.';
                return false;
                valid = false;
                
            } else if(password1.value == password2.value){
               // document.getElementById('phoneError').textContent = '';
                alert("valid");
                return true;
                //return false;
                
            }
        
        else{
            //event.preventDefault();
            passerror.innerHTML = "Password doesn't match";
            error.style.color = "red";
            alert("pass error!");
            return false;
            
        }
        
    } 
    else{
        alert("Email not valid!")
    return false;
    }

           
}*/