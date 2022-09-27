const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const Username_log = urlParams.get('username')
console.log(Username_log);

const Password_log = urlParams.get('password')
console.log(Password_log);

window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
    var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	if(username.value != Username_log || password.value != Password_log){
		alert("Username or password not match!");

		return false;
	}
	else{
		alert("Wellcome");
	}
}

			