var login=document.getElementById('login');
var model=document.getElementById('model');
var close=document.getElementById('close');
login.onclick=function()
{
    model.style.display="block";
}
close.onclick=function()
{
    model.style.display="none";
}
window.onclick=function(e)
{
    if(e.targed==model)
      {  model.style.display="none";
      }
}
function mylogin(){
    var email=document.getElementById('email');
    var pass=document.getElementById('pass');
if(email.value=="rutubagde12@gmail.com")
{ 
     if(pass.value=="123xyz")
      {
          alert("welcome to my page");
      }
      else{
          alert("wrong password");
          }
}
else{
    alert("email is not registered");
    }
}
