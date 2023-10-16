function validation(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

    if(username == ""){
        document.querySelector(".username").innerHTML = "**Please fill the username field";
        return false;
    }

    
    

    if(email == ""){
        document.querySelector(".email").innerHTML = "Please fill the Email field";
        return false;
    }

    if(password == ""){
        document.querySelector(".password").innerHTML = "Please fill the password field";
        return false;
    }

    if(password2 == ""){
        document.querySelector(".password2").innerHTML = "Please fill the password2 field";
        return false;
    }
}