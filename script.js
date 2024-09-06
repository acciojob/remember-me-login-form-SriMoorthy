//your JS code here. If required.
let name = document.getElementById('username').value
let p_word = document.getElementById('password').value
let check = document.getElementById('checkbox')

function userDetails() {
	if(check){
		localStorage.setItem("username",name)
		localStorage.setItem("password",p_word)
	}
	else{
		localStorage.clear();
		alert('Logged in as.')
	}
}