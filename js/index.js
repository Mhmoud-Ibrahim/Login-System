var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput =document.getElementById('userPassword');

var singupBtn =document.getElementById('singup');
var loginBtn =document.getElementById('loginBtn')



userContainer=[];


if(localStorage.getItem('newuser') != null){
  userContainer = JSON.parse(localStorage.getItem('newuser'))
}
function userregest(){   
  user={
    name:userNameInput.value,
    email:userEmailInput.value,
    password:userPasswordInput.value
  }
  userContainer.push(user)
  localStorage.setItem('newuser',JSON.stringify(userContainer))
  clearform()
}
singupBtn.addEventListener('click',function(){ 
  userregest()
})

function clearform(){
  userNameInput.value ="",
  userEmailInput.value="",
  userPasswordInput.value=""
}
var userNames = localStorage.getItem('namestoraged')

function login(){
  var LoginEmailInput =document.getElementById('LoginEmail');
  var LoginPasswordInput =document.getElementById('LoginPassword');
  for(i=0;i<userContainer.length;i++){
if(LoginEmailInput.value == userContainer[i].email&&LoginPasswordInput.value ==userContainer[i].password){
    loginBtn.setAttribute('href','home.html');
    localStorage.setItem('namestoraged', userContainer[i].name);
    displayWelcome()
}else{
  alert('no match')
}
  } 
  }
  
       function displayWelcome(){
var userNames = localStorage.getItem('namestoraged')
       document.getElementById('welcomes').innerHTML = userNames
       }
 



