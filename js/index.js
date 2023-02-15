 //variables
var usernameInput = document.getElementById("username"); 
var userEmailInput = document.getElementById("userEmail"); 
var userPasswordInput = document.getElementById("userPassword"); 
var signupBtn = document.getElementById("signupBtn"); 

var container; //container for inputs
if(localStorage.getItem("users") == null) // save in local storage
{
    container = [];
}
else
{
    container = JSON.parse(localStorage.getItem("users"));
}
function signUp()  //singup function
{

    validateInputs();
    found();

    if(validateInputs() == true && found() == false)
    {
        var user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        container.push(user)
        localStorage.setItem("users", JSON.stringify(container));
        var confirm = document.getElementById("confirmed");
        confirm.classList.replace("d-none", "d-block");
        var signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
    }
    else
    {
        var tryAgain = document.getElementById("tryAgain");
        tryAgain.classList.replace("d-none", "d-block");
    }

}

function validateName() //validate name function
{
    var usernameAlert = document.getElementById("nameAlert");

    var regex = /^[A-Z][a-z]{3,10}$/
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");
        return false
    }
}
function validatePassword() //validate password function
{
    var regex = /^[0-9]{5,10}[a-z]?$/;
    var userPasswordAlert = document.getElementById("PasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");
        return false
    }
}
function validateEmail() //validate email function
{
    var userEmailAlert = document.getElementById("EmailAlert");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function found() //found function
{
    var accountMsg = document.getElementById("accountMsg");
    
    for(var i = 0; i < container.length; i++)
    {

        if(container[i].name.toLowerCase() == usernameInput.value.toLowerCase() || container[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountMsg.classList.replace("d-none", "d-block");
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");
            return true
        }
    }
    return false
}
function validateInputs()  // validate all inputs
{
    validateName();   
    validateEmail();
    validatePassword();

    if( (validateName() == true && validateEmail() == true && validatePassword() == true))
    { return true}
    else{  return false }
}

var username = localStorage.getItem("usernames");

function loginUser() //loginuser function
{
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var loginBtn = document.getElementById("loginBtn");
    var wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < container.length; i++)
    {
        if(container[i].email.toLowerCase() == loginEmail.value.toLowerCase() && container[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            localStorage.setItem('usernames', container[i].name)
            loginBtn.setAttribute("href", "home.html");
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
}
function displayWelcomeUser() //display function
{
    document.getElementById("username").innerHTML = "Welcome"+ username;

}

function logOut() {  //loguot function
    localStorage.removeItem('usernames')
}
