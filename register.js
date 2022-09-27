window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
     var pass = document.getElementById("password");
     var con_pass = document.getElementById("confirm_password");
	if(pass.value != con_pass.value){
		alert("Password or Confirm password not match!");

		return false;
	}
	else if(pass.value == con_pass.value){
		alert("success register");
	}
}
