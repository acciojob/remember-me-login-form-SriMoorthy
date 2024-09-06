//your JS code here. If required.
let name = document.getElementById('username').value
let p_word = document.getElementById('password').value
let check = document.getElementById('checkbox').checked


function userDetails() {
	if(check){
		localStorage.setItem("username",name)
		localStorage.setItem("password",p_word)
	}
	else{
		localStorage.removeItem("username")
		localStorage.removeItem("password")
	}
	alert(`Logged in as username`)
}

function existUser(){
	let nm = localStorage.getItem("username")
	if(nm){
		alert("Logged in as existing user")
	}
}