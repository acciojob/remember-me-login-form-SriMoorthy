//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const existingUserButton = document.getElementById("existing");

    // Check if user credentials are saved in local storage
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existingUserButton.style.display = "block";
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("checkbox").checked;

        // If 'Remember me' is checked, save credentials in local storage
        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
    });

    // Handle existing user login
    existingUserButton.addEventListener("click", function () {
        const username = localStorage.getItem("username");
        alert(`Logged in as ${username}`);
    });
});