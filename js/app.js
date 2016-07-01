//Problem: Hints are shown even when form is valid
//Solution: Hide and display when needed

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide span (hints)
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}
function arePasswordsMatching(){
  return  $password.val() === $confirmPassword.val();
}
function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
   //Find out if password is valid
  if(isPasswordValid()){
    //hide hint if valid
    $password.next().hide();
  }else{  
    //else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent(){
  //Find out if password and confirmation match
  if(arePasswordsMatching()){
    //hide hint if valid
    $confirmPassword.next().hide();
  }else{
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  

//when event happens on confirmation input
 $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); 
 
enableSubmitEvent();






